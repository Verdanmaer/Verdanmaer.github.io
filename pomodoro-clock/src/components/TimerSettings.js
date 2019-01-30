import React from "react";

const TimerSettings = props => {
  return (
    <div>
      <div className="timer-settings">
        <div>Session length</div>
        <button onClick={props.decreaseWorkTime}>
          <i className="arrow alternate circle left icon outline" />
        </button>
        <p className="">{props.defaultWorkTime / 60000}</p>
        <button onClick={props.increaseWorkTime}>
          <i className="arrow alternate circle right icon outline" />
        </button>
      </div>
      <div className="timer-settings">
        <div>Break length</div>
        <button onClick={props.decreasePauseTime}>
          <i className="arrow alternate circle left icon outline" />
        </button>
        <p className="">{props.defaultPauseTime / 60000}</p>
        <button onClick={props.increasePauseTime}>
          <i className="arrow alternate circle right icon outline" />
        </button>
      </div>
    </div>
  );
};

export default TimerSettings;
