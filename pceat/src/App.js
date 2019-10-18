import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js';



function App() {
    addTime(id, time){
        var current_hour = new Date();
        console.log(current_hour);
        this.setState({})
    }
    constructor(props) {
        super(props);
        this.state = {
            Booth: {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0}
        }

    }
  return (
    <div className="App">
      <Map />
    </div>
  );
}

export default App;
