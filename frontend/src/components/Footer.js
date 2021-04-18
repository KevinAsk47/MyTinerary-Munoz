import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return(
        <footer style={{backgroundImage: `url(/img/footerDos.jpg)`}}>
            <div className="footerInfo">
            <div>
                <div className="middle">
                    <NavLink className="btn btn1" exact to="/">Home</NavLink>
                    <NavLink className="btn btn2" to="/Cities">Cities</NavLink>
                    <NavLink className="btn btn3" exact to="/">Log In</NavLink>
                    <NavLink className="btn btn4" exact to="/">Sign Up</NavLink>
                </div>
            </div>
            </div>
            <div className="footerFinal">
                <p>► All rights reserved | Kevin Muñoz ◄</p>
            </div>
        </footer>
    )
}

export default Footer