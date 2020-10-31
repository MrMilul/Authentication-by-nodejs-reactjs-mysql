import React, { Component} from 'react'
import {Button, Form, Row, Container, Col} from 'react-bootstrap'
import axios from 'axios'

class Register extends Component {
    constructor(){
        super()
        this.state ={
            f_name:'',
            l_name:'', 
            username:'', 
            password:'',
            email:'',
        }
    }
    changeHandler = (ev)=>{
        let nam = ev.target.name
        let val = ev.target.value
        this.setState({
            [nam]: val
        })
    }
    submit = ()=>{
        axios.post('http://localhost:3001/register', this.state)
        .then(()=>{
            alert('submit was succeed')
        })
    }
    render(){
        console.log(this.state)
        return (
            <>
            <Container>
                <Row>
                <Col></Col>
                <Col>
                <Form>
                    
                    <Form.Group >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name='f_name' type="text" placeholder="First Name" onChange={this.changeHandler}/>
                    </Form.Group>

                    <Form.Group >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name='l_name' type="text" placeholder="Last Name" onChange={this.changeHandler}/>
                    </Form.Group>

                    <Form.Group >
                    <Form.Label>User Name</Form.Label>
                    <Form.Control name='username' type="text" placeholder="User Name" onChange={this.changeHandler}/>
                    </Form.Group>

                    <Form.Group >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter Email" onChange={this.changeHandler}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>

                    </Form.Group>
                    <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" onChange={this.changeHandler} />
                    </Form.Group>

                    <Form.Group >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
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

export default Register 