import React from "react";

const Renderer = ({ minutes, seconds, completed }) => {
  if (completed) {
    return <div>completed</div>;
  } else {
    if (seconds < 10 && minutes >= 10) {
      return (
        <span>
          {minutes}:0{seconds}
        </span>
      );
    } else if (seconds >= 10 && minutes < 10) {
      return (
        <span>
          0{minutes}:{seconds}
        </span>
      );
    } else if (seconds < 10 && minutes < 10) {
      return (
        <span>
          0{minutes}:0{seconds}
        </span>
      );
    } else {
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  }
};

export default Renderer;
