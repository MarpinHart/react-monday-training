import React, { Component } from 'react';
import Rating from './Rating'

//Definition of the component Greetings
class DriverCard extends Component {
  render() {
    let n = this.props.children
    return (
      <div className="DriverCard">
      {this.props.name}
      {/* Also here check the solution code to get the right image and style it */}
      <img src={this.props.img} alt='bo' />
      <Rating>{this.props.rating}</Rating>
      </div>
    );
  }
}

//Definition of the function Greetings that will be used in App.js file
export default DriverCard;