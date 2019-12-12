import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/grid.css'
import BoothCol from './components/BoothCol.js'
import Booth from './components/Booth.js'


class App extends React.Component {
    constructor(props){
      super(props);
      var boothData = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
      boothData = boothData.map(x => {return new Date()});
      this.state = {
        boothData: boothData,
        currentlySelected: 0
      }
    }

    setCurrentlySelected = (id) => {
      this.setState({currentlySelected: id})
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
      //this sucks, we hate our lives
      var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      var newHeight = h + "px";
      console.log(newHeight);
      return (
          <Container fluid="true" style={{height:newHeight}} > 
             <Row style={{height:"20%"}}>
              <BoothCol onClick={this.setCurrentlySelected} id="0" booth="true" backgroundColor = "#41046b"/>
              <BoothCol backgroundColor = "#ffffff"/>
              <BoothCol onClick={this.setCurrentlySelected} id="1" booth="true" backgroundColor = "#efbb0d"/>              
              <BoothCol backgroundColor = "#ffffff"/>
              <BoothCol backgroundColor = "#ffffff"/>
              <BoothCol backgroundColor = "#ffffff"/>
              <BoothCol backgroundColor = "#ffffff"/>
              <BoothCol backgroundColor = "#ffffff"/>
              <BoothCol backgroundColor = "#ffffff"/>
              <BoothCol backgroundColor = "#ffffff"/>
              <BoothCol backgroundColor = "#ffffff"/>
            </Row>
             <Row style={{height:"20%"}}>
                <BoothCol onClick={this.setCurrentlySelected} id="2" booth="true" backgroundColor = "#efbb0d"/> 
                <BoothCol backgroundColor = "#ffffff"/>
                <BoothCol onClick={this.setCurrentlySelected} id="3" booth="true" backgroundColor = "#41046b"/>
                <BoothCol backgroundColor = "#ffffff"/>
                <BoothCol onClick={this.setCurrentlySelected} id="4" booth="true" backgroundColor = "#efbb0d"/> 
                <BoothCol onClick={this.setCurrentlySelected} id="5" booth="true" backgroundColor = "#41046b"/>
                <BoothCol backgroundColor = "#ffffff"/>
                <BoothCol onClick={this.setCurrentlySelected} id="6" booth="true" backgroundColor = "#efbb0d"/> 
                <BoothCol onClick={this.setCurrentlySelected} id="7" booth="true" backgroundColor = "#41046b"/>
                <BoothCol backgroundColor = "#ffffff"/>
                <BoothCol onClick={this.setCurrentlySelected} id="8" booth="true" backgroundColor = "#efbb0d"/> 
            </Row>
             <Row style={{height:"20%"}}>
                <BoothCol onClick={this.setCurrentlySelected} id="9" booth="true" backgroundColor = "#41046b"/>
                <BoothCol backgroundColor = "#ffffff"/>
                <BoothCol backgroundColor = "#ffffff"/>
                <BoothCol backgroundColor = "#ffffff"/>
                <BoothCol onClick={this.setCurrentlySelected} id="10" booth="true" backgroundColor = "#41046b"/>
                <BoothCol onClick={this.setCurrentlySelected} id="11" booth="true" backgroundColor = "#efbb0d"/> 
                <BoothCol backgroundColor = "#ffffff"/>
                <BoothCol onClick={this.setCurrentlySelected} id="12" booth="true" backgroundColor = "#41046b"/>
                <BoothCol onClick={this.setCurrentlySelected} id="13" booth="true" backgroundColor = "#efbb0d"/> 
                <BoothCol backgroundColor = "#ffffff"/>
                <BoothCol onClick={this.setCurrentlySelected} id="14" booth="true" backgroundColor = "#41046b"/>
            </Row>
             <Row style={{height:"20%"}}>
                <BoothCol onClick={this.setCurrentlySelected} id="15" booth="true" backgroundColor = "#efbb0d"/> 
                <BoothCol backgroundColor = "#ffffff"/>
                <BoothCol onClick={this.setCurrentlySelected} id="16" booth="true" backgroundColor = "#41046b"/>
                <BoothCol backgroundColor = "#ffffff"/>
                <BoothCol backgroundColor = "#ffffff"/>
                <BoothCol backgroundColor = "#ffffff"/>
                <Col style={{paddingLeft: "0px", paddingRight: "0px",}}></Col> 
                <BoothCol backgroundColor = "#ffffff"/>
                <BoothCol backgroundColor = "#ffffff"/>
                <BoothCol backgroundColor = "#ffffff"/>
                <BoothCol onClick={this.setCurrentlySelected} id="17" booth="true" backgroundColor = "#efbb0d"/> 
            </Row>
             <Row style={{height:"20%"}}>
                <BoothCol onClick={this.setCurrentlySelected} id="18" booth="true" backgroundColor = "#41046b"/>
                <BoothCol backgroundColor = "#ffffff"/>
                <BoothCol onClick={this.setCurrentlySelected} id="19" booth="true" backgroundColor = "#efbb0d"/> 
                <BoothCol backgroundColor = "#ffffff"/>
                <BoothCol backgroundColor = "#ffffff"/>
                <BoothCol backgroundColor = "#ffffff"/>
                <Col style={{paddingLeft: "0px", paddingRight: "0px",}}><div><br /><br /><br /><br /><br />D00R</div></Col>
                <BoothCol backgroundColor = "#ffffff"/>
                <BoothCol backgroundColor = "#ffffff"/>
                <BoothCol text = {this.state.currentlySelected} backgroundColor = "#ffffff"/>
                <BoothCol onClick={this.setCurrentlySelected} id="20" booth="true" backgroundColor = "#41046b"/>
            </Row>
          </Container>
      );
    }
}

export default App;
