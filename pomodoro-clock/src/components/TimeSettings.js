import React from "react";

class TimeSettings extends React.Component {
  constructor(props) {
    super(props);

    this.state = { workTime: 25, pauseTime: 5 };
  }

  increaseWorkTime = () => {
    if (this.state.workTime < 55) {
      this.setState(({ workTime }) => ({ workTime: workTime + 5 }));
    }
  };

  decreaseWorkTime = () => {
    if (this.state.workTime > 20) {
      this.setState(({ workTime }) => ({ workTime: workTime - 5 }));
    }
  };

  increasePauseTime = () => {
    if (this.state.pauseTime < 10) {
      this.setState(({ pauseTime }) => ({ pauseTime: pauseTime + 5 }));
    }
  };

  decreasePauseTime = () => {
    if (this.state.pauseTime > 5) {
      this.setState(({ pauseTime }) => ({ pauseTime: pauseTime - 5 }));
    }
  };

  render() {
    return (
      <div>
        <div>
          WorkTime: {this.state.workTime} minutes
          <button className="ui primary button" onClick={this.increaseWorkTime}>
            +
          </button>
          <button className="ui primary button" onClick={this.decreaseWorkTime}>
            -
          </button>
        </div>
        <div>
          PauseTime:{this.state.pauseTime} minutes
          <button
            className="ui primary button"
            onClick={this.increasePauseTime}
          >
            +
          </button>
          <button
            className="ui primary button"
            onClick={this.decreasePauseTime}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default TimeSettings;
