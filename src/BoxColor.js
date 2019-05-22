import React, { Component } from 'react';
// import Greetings from './greetings'


//Definition of the component Greetings
class BoxColor extends Component {
  render() {
    //Assigns the values to this.props
    let { r, g, b } = this.props
    //Formula to convert rgb colors into hex
    let hex = '#'
      + ('0'+r.toString(16)).substr(-2)
      + ('0'+g.toString(16)).substr(-2)
      + ('0'+b.toString(16)).substr(-2)
    let color = 'white' 
    // let rgb = [this.props.r, this.props.g, this.props.b].map(v => v.toString(16)).join("")
    return (
      <div className="boxCol" style={{
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        color: color,
      }}>
      rgb({r}, {g}, {b}) <br/>
      {hex}
      </div>
    );
  }
}

//Definition of the function Greetings that will be used in App.js file
export default BoxColor;