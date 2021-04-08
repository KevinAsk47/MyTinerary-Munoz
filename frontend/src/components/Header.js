import React from 'react';

const Header = () => {
    return(
        <header style={{backgroundImage: `url(https://image.freepik.com/vector-gratis/aviones-papel-volando-lineas-diseno-particulas-estilo_41814-315.jpg)`}}>
            <nav>
                <ul className="nav justify-content-end">
                    <li class="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="#">Cities</a>
                    </li>

                    <div class="dropdown">
                        <img src="./img/user.svg" alt=""/>

                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">

                    </a>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </div>
                    
                </ul>
            </nav>
            <div className="logoyeslogan">
                <div>
                    <img className="logo" src="./img/logo.png" alt=""/>
                </div>
                <div>
                    <h3>Find your perfect trip, designed by insiders who knows and love their cities!</h3>
                </div>
                <button type="button" class="btn btn-outline-success">Success</button>
            </div>
        </header>   
    )
}

export default Header