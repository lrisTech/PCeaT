import React from 'react';
import Booth from './Booth.js'

class Section2 extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div style = {{flexGrow: 1, display: "flex", flexDirection: "column"}}>
                <Booth id = '17' AppState = {this.props.AppState} addTime={this.props.addTime}/>
                <Booth id = '18' AppState = {this.props.AppState} addTime={this.props.addTime}/>
                <Booth id = '19' AppState = {this.props.AppState} addTime={this.props.addTime}/>
                <Booth id = '20' AppState = {this.props.AppState} addTime={this.props.addTime}/>
            </div>
        )
    }
}

export default Section2;
