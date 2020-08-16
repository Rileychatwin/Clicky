import React from "react";
import "./cards.css";
import imgJson from "../../image.json";

export class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: [],
      number: 0,
      score: 1
    }
    this.handleScoreChange = this.handleScoreChange.bind(this);
  }

  handleScoreChange(num) {
    if (this.state.clicked.includes(num)) {
      this.setState({ clicked: [] })
      this.setState({ score: 1 });
      this.props.onClick(99);
    } else if (this.state.score === 15) {
      this.setState({ score: 1 });
      this.props.onClick(15);
    } else {
      this.setState({ clicked: [...this.state.clicked, num] })
      this.setState({ score: this.state.score + 1 });
      this.props.onClick(this.state.score);
    }
  }

  randomNumbers() {
    let numArray = []
    for (var i = 0; i < 15; i++) {
      let num = Math.floor(Math.random() * 15);
      if (numArray.includes(num)) {
        i--;
      } else {
        numArray.push(num);
      }
    }
    return numArray;
  };

  render() {
    const numbers = this.randomNumbers();

    const images = numbers.map((num) => {
      return (
        <img
          className="images"
          key={imgJson[num].id}
          src={imgJson[num].asset}
          alt={imgJson[num].id}
          onClick={() => this.handleScoreChange(imgJson[num].id)}
        />
      );
    });

    return images;
  }
};
