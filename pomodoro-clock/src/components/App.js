import React from "react";
import TimeSettings from "./TimeSettings";
import Timer from "./Timer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.timeInMinutes = 60000;
    this.state = {
      defaultWorkTime: 0.2 * this.timeInMinutes,
      defaultPauseTime: 0.1 * this.timeInMinutes,
      timerStarted: false,
      isWorkTime: false
    };
  }

  increaseWorkTime = () => {
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
      console.log(this.state.isWorkTime);
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
      console.log(this.state.isWorkTime);
      this.setState(({ pauseTime }) => ({ pauseTime: pauseTime - 1000 }));
    }, 1000);
  };

  stopTimer = () => {
    this.setState({
      workTime: this.state.defaultWorkTime,
      pauseTime: this.state.defaultPauseTime,
      timerStarted: false,
      isWorkTime: false
    });
    window.clearInterval(this.countdownInterval);
  };

  render() {
    return (
      <div className="ui container">
        <h1>Pomodoro clock</h1>
        <div className="inline">Something</div>
        <div className="inline">Anything</div>
        <TimeSettings
          increaseWorkTime={this.increaseWorkTime}
          decreaseWorkTime={this.decreaseWorkTime}
          startWorkTime={this.startWorkTime}
          stopTimer={this.stopTimer}
        />
        <Timer
          className="timer"
          defaultWorkTime={this.state.defaultWorkTime}
          workTime={this.state.workTime}
          pauseTime={this.state.pauseTime}
          timerStarted={this.state.timerStarted}
          isWorkTime={this.state.isWorkTime}
        />
      </div>
    );
  }
}

export default App;
