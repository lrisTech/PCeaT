import React from 'react';

import Section0 from './Section0.js';
import Section1 from './Section1.js';
import Section2 from './Section2.js';

class Map extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            hello: 'world'
        }
    }

    render(){
        return(
            <div style = {{flexDirection: 'row', display: 'flex'}}>
                <Section0 AppState = {this.props.AppState} addTime={this.props.addTime}/>
                <Section1 AppState = {this.props.AppState} addTime={this.props.addTime}/>
                <Section2 AppState = {this.props.AppState} addTime={this.props.addTime}/>
            </div>
        )
    }
}

export default Map;
