import React from 'react';
import Countdown from 'react-countdown-now';

class Booth extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <div style = {{padding:10}}>
                    <Countdown date = {this.props.AppState.boothData[this.props.id]}/>
                </div>
                <button onClick = {() => this.props.addTime(this.props.id, -30)}>-30 Min</button>
                <button onClick = {() => this.props.addTime(this.props.id, -10)}>-10 Min</button>
                <button onClick = {() => this.props.addTime(this.props.id, -5)}>-5 Min</button>
                |
                <button onClick = {() => this.props.addTime(this.props.id, 5)}>+5 Min</button>
                <button onClick = {() => this.props.addTime(this.props.id, 10)}>+10 Min</button>
                <button onClick = {() => this.props.addTime(this.props.id, 30)}>+30 Min</button>
            </div>
        )
    }
}

export default Booth;
