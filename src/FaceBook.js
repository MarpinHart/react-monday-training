import React, { Component } from 'react';
import profiles from './data/berlin.json'

class FaceBook extends Component {
  constructor(props) {
    super(props)
    //Save the list of countries from profiles
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.countries = [...new Set(profiles.map(profile => profile.country))]
    this.state = {
      selected: null
    }
  }
  handleButtonClick(){
     this.setState(prevState=> ({
       countries: prevState.country
     })) 
  }
  render() {
    let profArray = []
    for(let i = 0; i < profiles.length; i++){
      profArray.push(
      <div className="FaceBook" key={i}>
        <img src={profiles[i].img} alt="Profile"/>
        <div>
          <p><strong>First name:</strong> {profiles[i].firstName} </p>
          <p><strong>Last name:</strong> {profiles[i].lastName} </p>
          <p><strong>Country:</strong> {profiles[i].country}</p>
          <p><strong>Type:</strong> {profiles[i].isStudent ? "Student" : "Teacher"} </p>
        </div>
      </div>
      )
    }
   console.log(profiles[0].firstName)
    return (
      <div className="Face">
      <h1>FaceBook</h1>
      {this.countries.map(country=> (
        <button 
          onClick={this.handleButtonClick(country)} 
          key={country}
          style={{
            backgroundColor: this.state.selected === country ? 'lightblue' : 'white'
          }}>{country}</button>
      ))}
        {profArray}
      </div>
    );
  }
}
//Check the solution with map

export default FaceBook;
