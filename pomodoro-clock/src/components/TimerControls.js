import React from "react";

const TimerControls = props => {
  return (
    <div className="timer-controls">
      <button
        className="ui labeled icon button test"
        onClick={props.startWorkTime}
      >
        <i className="play circle icon test2" />
        Start
      </button>
      <button className="ui labeled icon button test" onClick={props.stopTimer}>
        <i className="stop circle icon test2" />
        Stop
      </button>
    </div>
  );
};

export default TimerControls;
