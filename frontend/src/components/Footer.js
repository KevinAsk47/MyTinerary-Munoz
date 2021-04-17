import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return(
        <footer style={{backgroundImage: `url(/img/avionFooter.jpg)`}}>
            <div className="footerInfo">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink exact to="/"><a href="" className="nav-link" onClick={window.scroll(0,0)}>Home</a></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Cities"><a href="" className="nav-link" onClick={window.scroll(0,0)}>Cities</a></NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Log in</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Sign up</a>
                    </li>
                </ul>
            </div>
            <div className="footerFinal">
                <p>► All rights reserved | Kevin Muñoz ◄</p>
            </div>
        </footer>
    )
}

export default Footer