import React from "react";
import Timer from "./Timer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.time = 60000 * 25;
    this.state = { date: this.time };
  }

  render() {
    return (
      <div className="ui container">
        <Timer date={this.state.date} />
      </div>
    );
  }
}

export default App;
