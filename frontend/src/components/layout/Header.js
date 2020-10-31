import React, { Component} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <>
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="mr-auto">
                        <Nav.Link ><Link to='/' >Home</Link></Nav.Link>
                        <Nav.Link ><Link to='/Login' >Login</Link></Nav.Link>
                        <Nav.Link><Link to='/register' >Register</Link></Nav.Link>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    
    }
}

export default Header;