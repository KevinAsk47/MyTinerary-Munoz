import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import userActions from '../redux/actions/usersActions'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const imagenLogueado = props.usuario ? props.usuario.imagen : '/img/user.svg'

    return (
        <div>
            <div>
                {
                    props.usuario && <h3 className="bienvenida">Hello <span>{props.usuario.usuario}</span>!</h3>
                }
                <div id="userOff" style={{ backgroundImage: `url(${imagenLogueado})` }}></div>
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
                            {
                                !props.usuario &&
                                <>
                                    <NavItem className="navbar">
                                        <NavLink to="/login">Log In</NavLink>
                                    </NavItem>
                                    <NavItem className="navbar">
                                        <NavLink to="/signup">Sign Up</NavLink>
                                    </NavItem>
                                </>
                            }
                            {
                                props.usuario &&
                                <NavItem className="navbar">
                                    <NavLink to="/"><span onClick={props.desloguear}>Log Out</span></NavLink>
                                </NavItem>
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        usuario: state.users.users
    }
}

const mapDispatchToProps = {
    desloguear: userActions.desloguear
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)