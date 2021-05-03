import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
const Progress = (props) => {
  const { name, design, now } = props.data;
  return (
    <div className="mb-2">
      <h5 style={{ color: "#939393", fontSize: 15 }}>{name}</h5>
      <ProgressBar
        style={{ fontSize: 10, height: 12 }}
        animated
        now={now}
        label={design}
      />
    </div>
  );
};

export default Progress;
