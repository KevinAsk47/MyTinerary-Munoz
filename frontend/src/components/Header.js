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
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </nav>
        </header>   
    )
}

export default Header