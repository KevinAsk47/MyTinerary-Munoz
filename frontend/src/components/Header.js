import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <div className="hola">
                <Navbar className="hola" color="#f1f1f1" light expand="md">
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem className="navbar">
                                <NavLink exact to="/">Home</NavLink>
                            </NavItem>
                            <NavItem className="navbar">
                                <NavLink to="/Cities">Cities</NavLink>
                            </NavItem>
                            <NavItem className="navbar">
                                <NavLink to="">Log In</NavLink>
                            </NavItem>
                            <NavItem className="navbar">
                                <NavLink to="">Sign Up</NavLink>
                            </NavItem>
                        </Nav>
                        <img src="/img/user.svg" alt="user" />
                    </Collapse>
                </Navbar>
            </div>
        </div>
    )
}

export default Header