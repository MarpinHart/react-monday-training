import React, { Component } from 'react';
import './App.css';
import Greetings from './Greetings'
import Random from './Random'
import BoxColor from './BoxColor'
import CreditCard from './CreditCard'
import Rating from './Rating'
import DriverCard from './DriverCard'
import ClickablePicture from './ClickablePicture'
import Dice from './Dice'
import Carousel from './Carousel'
import NumbersTable from './NumbersTable'
import FaceBook from './FaceBook'

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Greetings</h1>
       {/* Here we use the greeting component twice and we 
           define props.lang ="de" and props.children="Ludwig" */}
       <Greetings lang="de" children="Ludwig" />
       {/* These two are the same exact same things */}
       <Greetings lang="fr">François</Greetings>
       <h1>Random</h1>
       <Random min={1} max={6}/>
       <Random min={1} max={100}/>
       <h1>BoxColor</h1>
       <BoxColor r={255} g={0} b={0} />
       <BoxColor r={128} g={255} b={0} />
       <h1>Credit Card</h1>
       <CreditCard type="Visa" number="0123456789016984" expirationMonth={12} expirationYear={2019} bank="Name of the Bank" owner="Firstname Lastname" bgColor="#eecc55" color="white" />
       <h1>Rating</h1>
       <Rating> 0 </Rating>    
       <Rating> 1 </Rating>    
       <Rating> 2 </Rating>    
       <Rating> 3 </Rating>    
       <Rating> 4 </Rating>    
       <Rating> 5 </Rating>    

       <h1> DriveCard </h1>
       <DriverCard
          name="John Doe"
          rating={4.2}
          img=""
          />
          <ClickablePicture/>
          <Dice/>
          <h1>Carousel</h1>
          <Carousel
  imgs={["https://randomuser.me/api/portraits/women/1.jpg", "https://randomuser.me/api/portraits/men/1.jpg","https://randomuser.me/api/portraits/women/2.jpg", "https://randomuser.me/api/portraits/men/2.jpg"]} />
     <NumbersTable limit={10} />
     <FaceBook />
     </div>
    );
  }
}

export default App;


