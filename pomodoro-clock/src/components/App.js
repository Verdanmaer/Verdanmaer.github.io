import React from "react";
import Timer from "./Timer";
import TimeSettings from "./TimeSettings";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Timer />
        <TimeSettings />
      </div>
    );
  }
}

export default App;
