import React, { Component } from "react";

    //Definition of the component Greetings
class Dice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.getRandomValue()
    };
    this.dices = [
      "/img/dice-empty.png",
      "/img/dice1.png",
      "/img/dice2.png",
      "/img/dice3.png",
      "/img/dice4.png",
      "/img/dice5.png",
      "/img/dice6.png"
    ];
    this.handleClick = this.handleClick.bind(this);
  }
    //Return a random value between 1 and 6 (no need to bind)
  getRandomValue() {
    return 1 + Math.floor(6 * Math.random());
  }

    //I have two setState to manage the operation
  handleClick() {
    // Checks if there is a value to prevent the Dice to be rolled even if we 
    // don't have value yet.
    if (this.state.value) {
      this.setState(prevState => ({
        value: null //I set the value null for a bit
      }));
      setTimeout(() => {
        this.setState(prevState => ({
          value: this.getRandomValue() //Then I change the state
        }));
      }, 500);
    }
    //The dice keeps rolling if we click faster multiple times
  }
  render() {
    let src;
    if (this.state.value)
      //if the value s 1,2,3,4,5,6
      src = `/img/dice${this.state.value}.png`;
      //if the value is null
    else src = `/img/dice-empty.png`;
    return (
      <div className="Dice">
        <h1>Loco</h1>
        <h1>Dice</h1>
        <img onClick={this.handleClick} src={src} alt="uagliao" />
      </div>
    );
  }
}

   //Definition of the function Greetings that will be used in App.js file
export default Dice;
