import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLink(props) {
    let classe = "nav-item";
    let current;
    if(props.active){
        classe+= " active";
        current = < span className="sr-only" > (current) </span>;
    }
    return (
        <li className={classe} >
            <Link to= {props.link}className="nav-link" > {props.nome} {current} </ Link>
        </li>);
}