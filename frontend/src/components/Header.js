import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';


const Header = () => {

    useEffect(() => {
        gsap.from("#text", { duration: 3, x: 300, opacity: 0, scale: 0.5 });
        gsap.from("#frase", { duration: 3, x: 300, opacity: 0, scale: 0.5 });

        gsap.to(".logo", 1, {
            scale: 1,
            y: 20,
            yoyo: true,
            repeat: -1,
            ease: "power1.inOut",
            delay: 0,
            stagger: {
                amount: 1,
                grid: "auto",
                from: "center"
            }
        });

        gsap.to("#callToAction", 1, {
            scale: 1,
            x: 10,
            yoyo: true,
            repeat: -1,
            ease: "power1.inOut",
            delay: 3,
            stagger: {
                amount: 1,
                grid: "auto",
                from: "center"
            }
        });
    }, [])

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <header>
            <div className="cajaSuperior">
                <div>
                    <Navbar color="#f1f1f1" light expand="md">
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
                            <img src="./img/user.svg" alt="user" />
                        </Collapse>
                    </Navbar>
                </div>
                <div className="logoyeslogan">
                    <div>
                        <img className="logo" src="./img/logoDos.png" alt="logo" />
                    </div>
                    <div style={{ marginTop: "2em" }}>
                        <h2 id="frase">Find your perfect trip, designed by insiders who knows and love their cities!</h2>
                        <h4 id="text">Click to start the adventure!</h4>
                    </div>
                </div>
                <NavLink to="/Cities"><button type="button" id="callToAction" className="btn callToAction btn-outline-success" onClick={window.scroll(0,0)}>Start</button></NavLink>
            </div>
            <div>
                <div className="videoEntrada">
                    <video src="./img/AvionApareciendo.mp4" type="video/mp4" autoPlay muted></video>
                </div>
            </div>
        </header>
    )
}

export default Header