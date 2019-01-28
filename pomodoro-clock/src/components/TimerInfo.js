import React from "react";

const TimerInfo = props => {
  if (props.isWorkTime) {
    return (
      <div className="timer-info">
        <p>Time to work!</p>
      </div>
    );
  } else {
    return (
      <div className="timer-info">
        <p>Take a break!</p>
      </div>
    );
  }
};

export default TimerInfo;
