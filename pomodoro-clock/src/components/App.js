import React from "react";
import TimeSettings from "./TimeSettings";
import Timer from "./Timer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.timeInMinutes = 60000;
    this.state = {
      defaultWorkTime: 0.1 * this.timeInMinutes,
      defaultPauseTime: 0.1 * this.timeInMinutes,
      timerStarted: false,
      isWorkTime: false
    };
  }

  increaseWorkTime = () => {
    console.log(this.state.defaultWorkTime);
    if (this.state.defaultWorkTime < 55 * this.timeInMinutes) {
      this.setState(({ defaultWorkTime }) => ({
        defaultWorkTime: defaultWorkTime + 5 * this.timeInMinutes
      }));
    }
  };

  decreaseWorkTime = () => {
    if (this.state.defaultWorkTime > 5 * this.timeInMinutes) {
      this.setState(({ defaultWorkTime }) => ({
        defaultWorkTime: defaultWorkTime - 5 * this.timeInMinutes
      }));
    }
  };

  startWorkTime = () => {
    this.setState(state => ({
      workTime: state.defaultWorkTime,
      pauseTime: state.defaultPauseTime,
      timerStarted: true,
      isWorkTime: true
    }));
    this.countdownInterval = window.setInterval(() => {
      if (this.state.workTime <= 0) {
        window.clearInterval(this.countdownInterval);
        this.setState({
          worktime: 0,
          pauseTime: this.state.defaultPauseTime,
          isWorkTime: false
        });
        this.startPauseTime();
      }
      this.setState(({ workTime }) => ({ workTime: workTime - 1000 }));
    }, 1000);
  };

  startPauseTime = () => {
    this.countdownInterval = window.setInterval(() => {
      if (this.state.pauseTime <= 0) {
        window.clearInterval(this.countdownInterval);
        this.setState({
          pauseTime: 0,
          workTime: this.state.defaultWorkTime,
          isWorkTime: true
        });
        this.startWorkTime();
      }
      this.setState(({ pauseTime }) => ({ pauseTime: pauseTime - 1000 }));
    }, 1000);
  };

  render() {
    return (
      <div className="ui container">
        <h1>Pomodoro clock</h1>
        <Timer
          defaultWorkTime={this.state.defaultWorkTime}
          workTime={this.state.workTime}
          pauseTime={this.state.pauseTime}
          timerStarted={this.state.timerStarted}
          isWorkTime={this.state.isWorkTime}
        />
        <TimeSettings
          increaseWorkTime={this.increaseWorkTime}
          decreaseWorkTime={this.decreaseWorkTime}
          startWorkTime={this.startWorkTime}
        />
      </div>
    );
  }
}

export default App;
