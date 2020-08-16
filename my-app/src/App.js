import React from "react";
import { Cards } from "./components/cards/cards";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    };
    this.scoreChange = this.scoreChange.bind(this)
  }

  scoreChange(newScore) {
    this.setState({ score: newScore});

    if (newScore === 15) {
      alert("Winner");
      this.setState({ score: 0 });
    } else if (newScore === 99) {
      alert("Image already selected");
      this.setState({ score: 0 });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>CLICKEDY CLICK</h1>
        </header>
        <div>Score: {this.state.score}</div>
        <div className="container">
          <Cards
            onClick={this.scoreChange}
          />
        </div>
      </div>
    );
  }
}
