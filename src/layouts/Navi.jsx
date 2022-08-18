import React from 'react'
import { useState, useEffect } from 'react'
import CartSummary from './CartSummary'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SignedOut from './SignedOut';
import SignedIn from './SignedIn';
import { Container } from 'react-bootstrap';
import { Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const navigate = useNavigate()


    function handleSignOut(params) {
        setIsAuthenticated(false)
        navigate("/", { replace: true });
    }

    function handleSignIn(params) {
        setIsAuthenticated(true)
    }

    return (
        <div >

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>

                    <Navbar.Brand >
                        <Link  to={`/`}>
                            <Image
                                fluid
                                className='rounded-circle'
                                style={{ width: "30px", height: "30px", marginRight: "10px" }}
                                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                            /></Link>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <CartSummary></CartSummary>
                        </Nav>

                        {isAuthenticated ? <SignedIn SignedOut={handleSignOut} bisey="1" /> :
                            <div className='p-2'><SignedOut SignIn={handleSignIn} /></div>}


                    </Navbar.Collapse>
                </Container>

            </Navbar>

        </div>
    )
}
