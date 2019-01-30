import React from "react";

const TimerInfo = props => {
  if (!props.timerStarted) {
    return (
      <div className="timer-info">
        <p>Session</p>
      </div>
    );
  }
  if (props.isWorkTime) {
    return (
      <div className="timer-info">
        <p>Session</p>
      </div>
    );
  } else {
    return (
      <div className="timer-info">
        <p>Break</p>
      </div>
    );
  }
};

export default TimerInfo;
