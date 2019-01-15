import React from "react";
import Countdown from "react-countdown-now";
import Renderer from "./Renderer";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { date: this.props.date };
  }

  startTimer = () => {
    this.countdownInterval = window.setInterval(() => {
      if (this.state.date <= 0) {
        return this.clearInterval();
      }

      this.setState(({ date }) => ({ date: date - 1000 }));
    }, 1000);
  };

  clearInterval() {
    window.clearInterval(this.countdownInterval);
  }

  render() {
    return (
      <div className="ui center aligned header" style={{ fontSize: "32px" }}>
        <Countdown
          date={this.state.date}
          daysInHours
          autoStart={false}
          renderer={Renderer}
          controlled={true}
        />
        <button className="ui primary button" onClick={this.startTimer}>
          Start
        </button>
      </div>
    );
  }
}

export default Timer;
