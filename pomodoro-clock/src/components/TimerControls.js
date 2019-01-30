import React from "react";

const TimerControls = props => {
  return (
    <div className="timer-controls">
      <button className="ui labeled icon button" onClick={props.startWorkTime}>
        <i className="play circle icon" />
        Start
      </button>
      <button className="ui labeled icon button" onClick={props.stopTimer}>
        <i className="stop circle icon" />
        Stop
      </button>
    </div>
  );
};

export default TimerControls;
