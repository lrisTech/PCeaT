import React from 'react';
import Booth from './Booth.js'

class Section0 extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div style = {{flexGrow: 1, display: "flex", flexDirection: "column", height: "100%", borderColor: "black", borderWidth: "thin"}}>
                <Booth id = '0' AppState = {this.props.AppState} addTime={this.props.addTime}/>
                <Booth id = '1' AppState = {this.props.AppState} addTime={this.props.addTime}/>
                <Booth id = '2' AppState = {this.props.AppState} addTime={this.props.addTime}/>
                <Booth id = '3' AppState = {this.props.AppState} addTime={this.props.addTime}/>
                <Booth id = '4' AppState = {this.props.AppState} addTime={this.props.addTime}/>
                <Booth id = '5' AppState = {this.props.AppState} addTime={this.props.addTime}/>
                <Booth id = '6' AppState = {this.props.AppState} addTime={this.props.addTime}/>
                <Booth id = '7' AppState = {this.props.AppState} addTime={this.props.addTime}/>
                <Booth id = '8' AppState = {this.props.AppState} addTime={this.props.addTime}/>
            </div>
        )
    }
}

export default Section0;
