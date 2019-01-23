import React from "react";

const Renderer = ({ minutes, seconds, completed }) => {
  if (seconds < 10 && minutes >= 10) {
    return (
      <div className="digits">
        {minutes}:0{seconds}
      </div>
    );
  } else if (seconds >= 10 && minutes < 10) {
    return (
      <div className="digits">
        0{minutes}:{seconds}
      </div>
    );
  } else if (seconds < 10 && minutes < 10) {
    return (
      <div className="digits">
        0{minutes}:0{seconds}
      </div>
    );
  } else {
    return (
      <div className="digits">
        {minutes}:{seconds}
      </div>
    );
  }
};

export default Renderer;
