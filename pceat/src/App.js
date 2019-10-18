import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js';



class App extends React.Component {
    constructor(props){
      super(props);
      var boothData = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
      boothData = boothData.map(x => {return new Date()});
      this.state = {
        boothData: boothData
      }
    }

      
    addTime = (id, incrementTimeInMinutes) => {
      var currentTime = new Date();
      var newBoothData = this.state.boothData;
      var previousTime = newBoothData[id];
      if(previousTime < currentTime){
        //expired time so we add to current time
        previousTime = currentTime;
      }
      // console.log(previousTime);
      previousTime.setMinutes(previousTime.getMinutes() + incrementTimeInMinutes);
      newBoothData[id] = previousTime;
      this.setState({boothData: newBoothData});
    }

    render(){
      return (
        <div className="App">
          <Map AppState={this.state}
               addTime={this.addTime}
          />
        </div>
      );
    }
}

export default App;
