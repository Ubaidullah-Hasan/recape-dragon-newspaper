import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUser } from "react-icons/fa";
import "./NavigationBar.css"
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (

        <Navbar bg="danger" variant="light">
            <Container>
                <Nav className="mx-auto">
                    <Link className='text-decoration-none text-muted mx-2' to="/">Home</Link>
                    <Link className='text-decoration-none text-muted mx-2' to="/about">About</Link>
                    <Link className='text-decoration-none text-muted mx-2' to="/career">Career</Link>
                </Nav>
                <div className='cus-icon me-3'>
                    <FaUser />
                </div>
                <Button variant="dark" className='rounded-0 bg-gradient px-5'>Login</Button>
            </Container>
        </Navbar>


    );
};

export default NavigationBar;