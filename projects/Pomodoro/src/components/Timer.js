import React from "react";
import Countdown from "react-countdown-now";
import TimerRenderer from "./TimerRenderer";

class Timer extends React.Component {
  renderLogic = () => {
    if (!this.props.timerStarted) {
      return this.props.defaultWorkTime;
    } else if (this.props.isWorkTime) {
      return this.props.workTime;
    } else {
      return this.props.pauseTime;
    }
  };

  render() {
    return (
      <Countdown
        date={this.renderLogic()}
        daysInHours
        autoStart={false}
        renderer={TimerRenderer}
        controlled={true}
      />
    );
  }
}

export default Timer;
