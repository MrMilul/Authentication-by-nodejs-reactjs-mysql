import React, { Component} from 'react';
import {Button, Form, Row, Container, Col} from 'react-bootstrap'
import axios from 'axios'

class Login extends Component{
    constructor(){
        super()
        this.state ={
            username: '', 
            password:'', 
            logedInName:'', 
            logedFailed:'',
            flag: null,
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
                   if(response.data.length){
                    this.setState({
                            logedInName: response.data[0].f_name.toUpperCase()+ ' ' + response.data[0].l_name.toUpperCase(),
                            flag: 1
                            })  
                       setTimeout(()=>{
                        this.props.history.push('/')
                       }, 1500)
                   }else{
                    this.setState({
                        logedFailed: response.data.message,
                        flag: 0
                    })
               
                    }
                
                })

        
    }
    render(){
        //showing welcome or wrong username or password message
        let loginStatus;
        if(this.state.flag === 1){
        loginStatus = <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Welcome {this.state.logedInName}</strong>
                    </div>
        } else if(this.state.flag === 0){
        loginStatus =   <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>{this.state.logedFailed}</strong><br/> Please try again!
                        </div>
        }      
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
                    <Col>{loginStatus}</Col>
                    </Row>
                   
                </Container>
                
            </>
        )}
}

export default Login