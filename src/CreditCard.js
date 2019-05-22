import React, { Component } from 'react';
// import Greetings from './greetings'


//Definition of the component Greetings
class CreditCard extends Component {
  render() {
    let num = []
    return (
        <div className="CreditCard" style={{
          backgroundColor: this.props.bgColor,
          color: `${this.props.color}`
        }}>
        <div className="type">
        {/* Pictures are not working, png file is not read, check the solution code on github */}
          {this.props.type === "Visa" && <img src="https://it.pngtree.com/so/visa"/>}
          {this.props.type === "Master Card" && <img src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi3gP6W2cXgAhUD4YUKHdk-CmkQjRx6BAgBEAU&url=https%3A%2F%2Fwww.kisspng.com%2Fpng-mastercard-logo-png-20057%2F&psig=AOvVaw3Ux23HNivlDHHqdhfMLxZI&ust=1550593531239583"/>}
        </div>
        <div className="number">●●●● ●●●● ●●●● {this.props.number.substr(-4)}</div>
        {/* substr(-2) to keep only the last two digits and not show something like 012 for December */}
        {/* % 100 */}
        <div className="expires-bank">Expires: {('0'+this.props.expirationMonth).substr(-2)}/{this.props.expirationYear % 100} {this.props.bank}</div>
        <div>{this.props.owner}</div>
        </div>
    );
  }
}

//Definition of the function Greetings that will be used in App.js file
export default CreditCard;