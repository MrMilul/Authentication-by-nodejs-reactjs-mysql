import React, { Component} from 'react';
import {Button, Form, Row, Container, Col} from 'react-bootstrap'

class Login extends Component{
    render(){
        return (
            <>
                <Container className="my-5">
                    <Row>
                    <Col></Col>
                    <Col>
                        <Form>
                        <Form.Group controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="User name" required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                       
                        <Button variant="primary" type="submit">
                        Submit
                        </Button>
                        </Form>
                    </Col>
                    <Col></Col>
                    </Row>
                   
                </Container>
                
            </>
        )}
}

export default Login