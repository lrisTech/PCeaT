import React from 'react';
import Countdown from 'react-countdown-now';
import Col from 'react-bootstrap/Col';


class BoothCol extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            checkedIn: false,
            opacity: 1
        }
    }

    

    render(){
        if(this.props.booth){
            return(
                <Col id="test" style={{opacity: this.state.opacity, backgroundColor:"#fffff", paddingLeft: "0px", paddingRight: "0px",}}><button style ={{backgroundColor:this.props.backgroundColor, height:"100%",width:"100%", borderRadius:"10px"}} onClick={()=>this.setState({opacity: 0.7})}/></Col>
            )
        }else{
            return(
                <Col style={{backgroundColor:this.props.backgroundColor, paddingLeft: "0px", paddingRight: "0px",}}>{this.props.text}</Col>
            )
        }
    }
}

export default BoothCol;
