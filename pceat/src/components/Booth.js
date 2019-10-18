import React from 'react';

class Booth extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            time_stamp: null
        }

    }



    render(){
        this.addTime()

        return(
            <div>Booth</div>
        )

    }
}

export default Booth;
