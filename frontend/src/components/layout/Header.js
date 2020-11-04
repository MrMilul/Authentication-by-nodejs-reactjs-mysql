import React, { Component} from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios'

class Header extends Component{
    constructor(){
        super()
        this.state ={
            user:[], 
            flag: false
        }
    }
    
    componentDidMount() {
        axios.get("http://localhost:3001/login").then((response)=>{
                if(response.data.logedIn){
                    this.setState({
                        user: response.data,
                        flag: true
                    })
                }
            })
    }
    logout = ()=>{
        window.sessionStorage.removeItem('userId');
    }
    render(){
        let logout; 
        if(this.state.flag){
        logout = <Nav.Link>Welcome {this.state.user.f_name} 
                <Button onClick={this.logout}>Logout</Button>
                </Nav.Link>
        }

        axios.defaults.withCredentials = true;     
        return(
            <>
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mr-auto">
                    <Nav.Link ><Link to='/' >Home</Link></Nav.Link>
                    <Nav.Link ><Link to='/Login' >Login</Link></Nav.Link>
                    <Nav.Link><Link to='/register' >Register </Link></Nav.Link>
                    {logout}
                    </Nav>
                        
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    
    }
}

export default Header;