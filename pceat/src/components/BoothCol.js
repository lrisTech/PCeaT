import React from 'react';
import Countdown from 'react-countdown-now';
import Col from 'react-bootstrap/Col';


class BoothCol extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        if(this.props.booth){
            return(
                <Col style={{backgroundColor:"#fffff", paddingLeft: "0px", paddingRight: "0px",}}><button style ={{backgroundColor:this.props.backgroundColor, height:"100%",width:"100%", borderRadius:"10px"}} onClick={()=>this.props.onClick(this.props.id)}/></Col>
            )
        }else{
            return(
                <Col style={{backgroundColor:this.props.backgroundColor, paddingLeft: "0px", paddingRight: "0px",}}>{this.props.text}</Col>
            )
        }
    }
}

export default BoothCol;
