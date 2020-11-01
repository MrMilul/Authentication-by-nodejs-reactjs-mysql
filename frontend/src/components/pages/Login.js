import React, { Component} from 'react';
import {Button, Form, Row, Container, Col} from 'react-bootstrap'
import axios from 'axios'

class Login extends Component{
    constructor(){
        super()
        this.state ={
            username: '', 
            password:''
        }
    }
    changeHandler = (ev)=>{
        let nam = ev.target.name
        let val = ev.target.value
        this.setState({
            [nam]: val
        })
    }
    submit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login', this.state)
                .then((response)=>{
                   console.log(response.data)
                })

        
    }
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
                        <Form.Control onChange={this.changeHandler} name='username' type="text" placeholder="User name" required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.changeHandler} name='password' type="password" placeholder="Password" />
                        </Form.Group>
                       
                        <Button onClick={this.submit} variant="primary" type="submit">
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