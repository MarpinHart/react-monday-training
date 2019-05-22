import React, { Component } from 'react';

//Definition of the component Greetings
class ClickablePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isClicked: !state.isClicked,
    }));
  }
  render() {
    return (
      <div className="ClickablePicture">
      <h1>Clickable Picture</h1>
      <img onClick={this.handleClick} src={this.state.isClicked ? "https://i.imgur.com/EMNDZC3.png" : "http://image.jeuxvideo.com/medias-sm/148700/1486999470-4470-artwork.jpg"} alt='bo'/>
      </div>
    );
  }
}

//Definition of the function Greetings that will be used in App.js file
export default ClickablePicture;