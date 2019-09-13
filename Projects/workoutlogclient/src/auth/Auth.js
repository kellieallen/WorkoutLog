import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Signup from './Signup';
import Login from './Login';

const Auth = (props) => {
// We are creating a functional component. It has no state, and it will simply pull in the props that will be passed down eventually.  Currently, this component is basically going to hold our login and signup forms side by side.  We have stubbed them out as text, but we'll add them as components later.

    return(
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    <Signup updateToken={props.updateToken}/>
                </Col>
                <Col md="6">
                    <Login updateToken={props.updateToken}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;