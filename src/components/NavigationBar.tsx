import '../styles/NavigationBar.scss';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export const NavigationBar: React.FC = () => {
    return (
        <Navbar variant="light" expand="lg">
            <Navbar.Brand href="#home">Corné Eggebeen</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <li className="nav-item">
                        <Nav.Link href="#home">About Me</Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link href="#link">My Work</Nav.Link>
                    </li>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
