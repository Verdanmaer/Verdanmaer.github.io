import React from "react";

class TimeSettings extends React.Component {
  render() {
    return (
      <div>
        <div className="time-settings">
          <div>Session length</div>
          <button onClick={this.props.decreaseWorkTime}>
            <i className="angle left icon time-settings" />
          </button>
          <p className="time-settings">{this.props.defaultWorkTime / 60000}</p>
          <button onClick={this.props.increaseWorkTime}>
            <i className="angle right icon time-settings" />
          </button>
        </div>
        <div className="time-settings">
          <div>Break length</div>
          <button onClick={this.props.decreasePauseTime}>
            <i className="angle left icon time-settings" />
          </button>
          <p className="time-settings">{this.props.defaultPauseTime / 60000}</p>
          <button onClick={this.props.increasePauseTime}>
            <i className="angle right icon time-settings" />
          </button>
        </div>
      </div>
    );
  }
}

export default TimeSettings;
