import './style.scss';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export const Navigation: React.FC = () => {
    return (
        <Navbar variant="light" expand="lg">
            <Navbar.Brand href="#home">Corné Eggebeen</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <li className="nav-item">
                        <Nav.Link href="#about-me-section">ABOUT ME</Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link href="#my-work-section">MY WORK</Nav.Link>
                    </li>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
