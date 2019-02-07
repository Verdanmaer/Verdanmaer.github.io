import React from "react";

const TimerRenderer = ({ minutes, seconds }) => {
  if (seconds < 10 && minutes >= 10) {
    return (
      <div className="timer">
        {minutes}:0{seconds}
      </div>
    );
  } else if (seconds >= 10 && minutes < 10) {
    return (
      <div className="timer">
        0{minutes}:{seconds}
      </div>
    );
  } else if (seconds < 10 && minutes < 10) {
    return (
      <div className="timer">
        0{minutes}:0{seconds}
      </div>
    );
  } else {
    return (
      <div className="timer">
        {minutes}:{seconds}
      </div>
    );
  }
};

export default TimerRenderer;
