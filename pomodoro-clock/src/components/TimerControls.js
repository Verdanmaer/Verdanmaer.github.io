import React from "react";

const TimerControls = props => {
  return (
    <div className="timer-controls">
      <div>
        <button
          className="ui labeled icon button"
          onClick={props.startWorkTime}
          disabled={props.timerStarted}
        >
          <i className="play circle icon" />
          Start
        </button>
      </div>
      <div>
        <button className="ui labeled icon button" onClick={props.stopTimer}>
          <i className="stop circle icon" />
          Stop
        </button>
      </div>
    </div>
  );
};

export default TimerControls;
