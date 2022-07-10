const alpha = 0.3;

const f1TeamColourBorders = {
  "Red Bull": "rgb(6,0,239)",
  Ferrari: "rgb(220,0,0)",
  Mercedes: "rgb(0,210,90)",
  McLaren: "rgb(255,135,0)",
  "Alfa Romeo": "rgb(144,0,0)",
  Alpine: "rgb(0,144,255)",
  AlphaTauri: "rgb(43,69,98)",
  Haas: "rgb(200,200,200)",
  "Aston Martin": "rgb(0,111,98)",
  Williams: "rgb(0,90,255)",
};

const f1TeamColourFills = {
  "Red Bull": `rgba(6,0,239,${alpha})`,
  Ferrari: `rgba(220,0,0,${alpha})`,
  Mercedes: `rgba(0,210,90,${alpha})`,
  McLaren: `rgba(255,135,0,${alpha})`,
  "Alfa Romeo": `rgba(144,0,0,${alpha})`,
  Alpine: `rgba(0,144,255,${alpha})`,
  AlphaTauri: `rgba(43,69,98,${alpha})`,
  Haas: `rgba(255,255,255,${alpha})`,
  "Aston Martin": `rgba(0,111,98,${alpha})`,
  Williams: `rgba(0,90,255,${alpha})`,
};

// TODO differentiate colours between teammates
const f1DriverColourBorders = {
  perez: `rgb(6,0,239)`,
  max_verstappen: `rgb(6,0,239)`,
  leclerc: `rgb(220,0,0)`,
  sainz: `rgb(220,0,0)`,
  hamilton: `rgb(0,210,90)`,
  russell: `rgb(0,210,90)`,
  ricciardo: `rgb(255,135,0)`,
  norris: `rgb(255,135,0)`,
  bottas: `rgb(144,0,0)`,
  zhou: `rgb(144,0,0)`,
  alonso: `rgb(0,144,255)`,
  ocon: `rgb(0,144,255)`,
  gasly: `rgb(43,69,98)`,
  tsunoda: `rgb(43,69,98)`,
  kevin_magnussen: `rgba(200,200,200)`,
  mick_schumacher: `rgba(200,200,200)`,
  stroll: `rgb(0,111,98)`,
  vettel: `rgb(0,111,98)`,
  hulkenberg: `rgb(0,111,98)`,
  latifi: `rgb(0,90,255)`,
  albon: `rgb(0,90,255)`,
};

// TODO differentiate colours between teammates
const f1DriverColourFills = {
  perez: `rgba(6,0,239,${alpha})`,
  max_verstappen: `rgba(6,0,239,${alpha})`,
  leclerc: `rgba(220,0,0,${alpha})`,
  sainz: `rgba(220,0,0,${alpha})`,
  hamilton: `rgba(0,210,90,${alpha})`,
  russell: `rgba(0,210,90,${alpha})`,
  ricciardo: `rgba(255,135,0,${alpha})`,
  norris: `rgba(255,135,0,${alpha})`,
  bottas: `rgba(144,0,0,${alpha})`,
  zhou: `rgba(144,0,0,${alpha})`,
  alonso: `rgba(0,144,255,${alpha})`,
  ocon: `rgba(0,144,255,${alpha})`,
  gasly: `rgba(43,69,98,${alpha})`,
  tsunoda: `rgba(43,69,98,${alpha})`,
  kevin_magnussen: `rgba(50,50,50,${alpha})`,
  mick_schumacher: `rgba(50,50,50,${alpha})`,
  stroll: `rgba(0,111,98,${alpha})`,
  vettel: `rgba(0,111,98,${alpha})`,
  hulkenberg: `rgba(0,111,98,${alpha})`,
  latifi: `rgba(0,90,255,${alpha})`,
  albon: `rgba(0,90,255,${alpha})`,
};

export { f1TeamColourBorders, f1TeamColourFills, f1DriverColourBorders, f1DriverColourFills};
