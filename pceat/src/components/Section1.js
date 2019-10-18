import React from 'react';
import Booth from './Booth.js'

class Section1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            hello: 'world'
        }
    }

    render(){
        return(
            <div style = {{flexGrow: 1}}>
                <Booth />
                <Booth />
                <Booth />
                <Booth />
                <Booth />
                <Booth />
                <Booth />
                <Booth />
                <Booth />
            </div>
        )
    }
}

export default Section1;
