import React, { Component } from 'react';
// import Greetings from './greetings'


//Definition of the component Greetings
class Greetings extends Component {
  render() {
    console.log(this.props) //To see the props
    let greetings = {
      de: 'Hallo',
      en: 'Hello',
      fr: 'Bonjour',
      es: 'Hola',
    }
    return (
      <div className="box">
      {/* I call the children component in App.js file */}
        {greetings[this.props.lang]} {this.props.children}
      </div>
    );
  }
}

//Definition of the function Greetings that will be used in App.js file
export default Greetings;


//    ----- THIS IS ANOTHER WAY TO SOLVE THE EXERCISE ------
// renderABitLonger() {
//   if (this.props.lang === 'fr')
//     return (
//       <div className="box">
//         Bonjour {this.props.children}
//       </div>
//     );
//   if (this.props.lang === 'de')
//     return (
//       <div className="box">
//         Hallo {this.props.children}
//       </div>
//     );
//   if (this.props.lang === 'es')
//     return (
//       <div className="box">
//         Hola {this.props.children}
//       </div>
//     );
//   return (
//     <div className="box">
//       Hello {this.props.children}
//     </div>
//   );