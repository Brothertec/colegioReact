import React from 'react';

export default function NavDropDown(props) {

    return (
        <li className="nav-item dropdown" >
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" > Tarefas </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {props.children}
            </div>
        </li>
    );
}