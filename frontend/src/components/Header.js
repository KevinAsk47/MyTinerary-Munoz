import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return(
        <header style={{backgroundImage: `url(https://image.freepik.com/vector-gratis/aviones-papel-volando-lineas-diseno-particulas-estilo_41814-315.jpg)`}}>
            <nav>
                <div className="nav">
 
                <div className="login">
                    <img src="./img/user.svg" alt=""/>
                </div>

                <div className="enlaces">
                <NavLink exact to="/"><p>Home</p></NavLink>

                <NavLink to="/Cities"><p>Cities</p></NavLink>
                </div>

            </div>

            </nav>
            <div className="logoyeslogan">
                <div>
                    <img className="logo" src="./img/logoDos.png" alt=""/>
                </div>
                <div>
                    <h5>Find your perfect trip, designed by insiders who knows and love their cities!</h5>
                    <p>GOOD!</p>
                </div>
                <NavLink to="/Cities"><button type="button" class="btn btn-outline-success">Success</button></NavLink>
                
            </div>
        </header>   
    )
}

export default Header