import React from "react";

class TimeSettings extends React.Component {
  render() {
    return (
      <div>
        <button
          className="ui primary button"
          onClick={this.props.increaseWorkTime}
        >
          +
        </button>
        <button
          className="ui primary button"
          onClick={this.props.decreaseWorkTime}
        >
          -
        </button>
        <button
          className="ui primary button"
          onClick={this.props.startWorkTime}
        >
          START
        </button>
        <button className="ui primary button" onClick={this.props.stopTimer}>
          STOP
        </button>
      </div>
    );
  }
}

export default TimeSettings;
