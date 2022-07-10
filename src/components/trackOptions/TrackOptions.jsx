import React from "react";
import PropTypes from "prop-types";

import "./TrackOptions.css"

const TrackOptions = (props) => {
  let tracks = props.tracks;
  let track_options;
  console.log("tracks:");
  console.log(tracks);

  if (tracks !== 0) {
    track_options = tracks.map((track) => (
      <span key={parseInt(track["round"])}><input type="checkbox" value={track["track_id"]}/> {track["track_name"]}</span>
    ));
    
  }

  return <div className="track-options-container">{track_options}</div>;
};

export default TrackOptions;
