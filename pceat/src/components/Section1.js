import React from 'react';
import Booth from './Booth.js'

class Section1 extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div style = {{flexGrow: 1, display: "flex", flexDirection: "column"}}>
                <Booth id = '9' AppState = {this.props.AppState} addTime={this.props.addTime}/>
                <Booth id = '10' AppState = {this.props.AppState} addTime={this.props.addTime}/>
                <Booth id = '11' AppState = {this.props.AppState} addTime={this.props.addTime}/>
                <Booth id = '12' AppState = {this.props.AppState} addTime={this.props.addTime}/>
                <Booth id = '13' AppState = {this.props.AppState} addTime={this.props.addTime}/>
                <Booth id = '14' AppState = {this.props.AppState} addTime={this.props.addTime}/>
                <Booth id = '15' AppState = {this.props.AppState} addTime={this.props.addTime}/>
                <Booth id = '16' AppState = {this.props.AppState} addTime={this.props.addTime}/>
            </div>
        )
    }
}

export default Section1;
