import React from "react";
import Timer from "./Timer";
import TimerSettings from "./TimerSettings";
import TimerControls from "./TimerControls";
import TimerInfo from "./TimerInfo";

import soundfile from "../audio/beep.wav";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.timeInMinutes = 60000;
    this.state = {
      defaultWorkTime: 25 * this.timeInMinutes,
      defaultPauseTime: 5 * this.timeInMinutes,
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

  increasePauseTime = () => {
    if (this.state.defaultPauseTime < 55 * this.timeInMinutes) {
      this.setState(({ defaultPauseTime }) => ({
        defaultPauseTime: defaultPauseTime + 5 * this.timeInMinutes
      }));
    }
  };

  decreasePauseTime = () => {
    if (this.state.defaultPauseTime > 5 * this.timeInMinutes) {
      this.setState(({ defaultPauseTime }) => ({
        defaultPauseTime: defaultPauseTime - 5 * this.timeInMinutes
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
        this.playSound();
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
        this.playSound();
        this.startWorkTime();
      }
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

  playSound = () => {
    let beep = new Audio(soundfile);
    beep.play();
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">Pomodoro clock</h1>

        <TimerSettings
          defaultWorkTime={this.state.defaultWorkTime}
          defaultPauseTime={this.state.defaultPauseTime}
          increaseWorkTime={this.increaseWorkTime}
          decreaseWorkTime={this.decreaseWorkTime}
          increasePauseTime={this.increasePauseTime}
          decreasePauseTime={this.decreasePauseTime}
          timerStarted={this.state.timerStarted}
        />
        <Timer
          defaultWorkTime={this.state.defaultWorkTime}
          workTime={this.state.workTime}
          pauseTime={this.state.pauseTime}
          timerStarted={this.state.timerStarted}
          isWorkTime={this.state.isWorkTime}
        />
        <TimerInfo
          isWorkTime={this.state.isWorkTime}
          timerStarted={this.state.timerStarted}
        />
        <TimerControls
          startWorkTime={this.startWorkTime}
          stopTimer={this.stopTimer}
          timerStarted={this.state.timerStarted}
        />
      </div>
    );
  }
}

export default App;
