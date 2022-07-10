// This will contain all functions needed for requesting data from Ergast's API
// TODO - Caching - DB? Which db would be best for this kind of thing? MongoDB? - Research
// TODO - Consider using redux? - Research

const api_base = "http://ergast.com/api/f1/";

export async function getAllDrivers(year = 2022) {
  let raw_data = await fetch(`${api_base}${year}/drivers.json`);
  let json_data = await raw_data.json();
  let drivers = json_data["MRData"]["DriverTable"]["Drivers"];
  return drivers;
}

export async function getDriverStandings(year = 2022) {
  let raw_data = await fetch(`${api_base}${year}/5/driverStandings.json`);
  let json_data = await raw_data.json();
  json_data =
    json_data["MRData"]["StandingsTable"]["StandingsLists"][0][
      "DriverStandings"
    ];
  let driverStandings = json_data.map((pos) => ({
    position: pos.position,
    name: `${pos["Driver"]["givenName"]} ${pos["Driver"]["familyName"]}`,
    points: pos.points,
  }));
  return driverStandings;
}

export async function getConstructorsStandings(year = 2022) {
  let raw_data = await fetch(`${api_base}${year}/5/constructorStandings.json`);
  let json_data = await raw_data.json();
  json_data =
    json_data["MRData"]["StandingsTable"]["StandingsLists"][0][
      "ConstructorStandings"
    ];
  let constructorStandings = json_data.map((pos) => ({
    position: pos.position,
    name: pos["Constructor"]["name"],
    points: pos.points,
  }));
  return constructorStandings;
}

export async function getSchedule(year = 2022) {
  let raw_data = await fetch(`${api_base}${year}.json`);

  let json_data = await raw_data.json();
  json_data = json_data["MRData"]["RaceTable"]["Races"];
  let schedule = json_data; // TODO - Do we want to filter this data?
  // console.log(schedule);
  return schedule;
}

export async function getTracks(year = 2022) {
  let tracks;
  await getSchedule(year).then((schedule_data) => {
    tracks = schedule_data.map((sch) => ({
      round: sch["round"],
      track_id: sch["Circuit"]["circuitId"],
      track_name: sch["Circuit"]["circuitName"],
      race_name: sch["raceName"],
    }));
  });
  return tracks;
}

export async function getLapTimesByTrack(track, year = 2022, limit = 9999) {
  let raw_data = await fetch(
    `${api_base}${year}/${track}/laps.json?limit=${limit}`
  );
  let json_data = await raw_data.json();
  // console.log("json_data")
  // console.log(json_data)
  let data = {};
  data["lapTimes"] = json_data["MRData"]["RaceTable"]["Races"][0]["Laps"];
  data["round"] = json_data["MRData"]["RaceTable"]["round"];
  data["Circuit"] = json_data["MRData"]["RaceTable"]["Races"][0]["Circuit"];
  console.log("data");
  console.log(data);
  return data;
}
