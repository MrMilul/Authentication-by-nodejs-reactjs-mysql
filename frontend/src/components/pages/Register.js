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
            password1: '',
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
    submit = (e)=>{
        //checking password correction and fill the all form
        //after regestratioin redirect to login
        if(this.state.password === this.state.password1){
            if(this.state.email || this.state.username){
                axios.post('http://localhost:3001/register', this.state)
                .then(()=>{
                    alert('submit was succeed')
                })
                setTimeout(()=>{
                    this.props.history.push('/login')
                }, 1000)
            }else{
                e.preventDefault()
                alert("Please fill all form")
            }
        }else{
            e.preventDefault()
            alert("Entered Passwords are not match\nPlease try again")
        }
   
    }
    render(){
    
        return (
            <>
            <Container>
                <Row>
                <Col></Col>
                <Col>
                <Form>
                    
                    <Form.Group >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name='f_name' type="text" placeholder="First Name" onChange={this.changeHandler} required/>
                    </Form.Group>

                    <Form.Group >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name='l_name' type="text" placeholder="Last Name" onChange={this.changeHandler} required/>
                    </Form.Group>

                    <Form.Group >
                    <Form.Label>User Name</Form.Label>
                    <Form.Control name='username' type="text" placeholder="User Name" onChange={this.changeHandler} required/>
                    </Form.Group>

                    <Form.Group >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter Email" onChange={this.changeHandler} required/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>

                    </Form.Group>
                    <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" onChange={this.changeHandler} required />
                    </Form.Group>

                    <Form.Group >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name='password1' type="password"  onChange={this.changeHandler} placeholder="Password" />
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