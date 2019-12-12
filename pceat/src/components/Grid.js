import React from 'react';


class Grid extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <Container>
                  <Row>
                    <Col xs></Col>
                    <Col xs></Col>
                    <Col xs></Col>
                    <Col xs></Col>
                  </Row>
                </Container>
            </div>
        )
    }
}

export default Grid;
