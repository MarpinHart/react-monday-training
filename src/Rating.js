import React, { Component } from 'react';


//Definition of the component Greetings
class Rating extends Component {
  render() {
    let n = this.props.children
    return (
      <div className="Rating">
      {n >= 0.5 ? '★' : '☆'}
      {n >= 1.5 ? '★' : '☆'}
      {n >= 2.5 ? '★' : '☆'}
      {n >= 3.5 ? '★' : '☆'}
      {n >= 4.5 ? '★' : '☆'}
      </div>
    );
  }
}

//Definition of the function Greetings that will be used in App.js file
export default Rating;