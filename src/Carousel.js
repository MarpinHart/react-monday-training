import React, { Component } from 'react';

//Definition of the component Greetings
class Carousel extends Component {
  constructor(props){
    super(props)
    this.state = {
      indexImgs: 0
    }
    // handleClick is already bond in the render
    // this.handleClick = this.handleClick.bind(this)
  }
  handleClick(delta){
    this.setState(prevState => ({
      // module (resto) is useful to loop an array. In this case it can be negative so we add the lenght also to 
      // the first factor
      indexImgs: (prevState.indexImgs + delta + this.props.imgs.length) % this.props.imgs.length
    }))
  }
  render() {
    let src = this.props.imgs[this.state.indexImgs]
    return (
      <div className="Carousel">
      <button onClick={()=>this.handleClick(-1)}>Left</button>
      <img
        src={src}
        alt="carousel" />
      <button onClick={()=>this.handleClick(1)}>Right</button>
      </div>
    );
  }
}

//Definition of the function Greetings that will be used in App.js file
export default Carousel;