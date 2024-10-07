import React from "react";
import {Navbar , Nav , Container} from 'react-bootstrap';
import {Link } from 'react-router-dom';


// Atually Navbar development is Started

const GymNavBar = ()  =>{
  return(
    <div>
    <Navbar bg = "white" varient= 'white' expand='lg'>
        <Container>
            <Navbar.Brand as={Link} to="/"  className="navbar-logo">
                Absolute<span>Fitness-clube</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" className="nav-item">Home</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
     
   </div>      
  )
}
export default GymNavBar;