import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function NavLinkCustom(props) {
    let classe = "nav-item";
    let current;
    if(props.active){
        classe+= " active";
        current = < span className="sr-only" > (current) </span>;
    }
    return (
        <li className={classe} >
            <NavLink to= {props.link} exatc className="nav-link" > {props.nome} {current} </NavLink>
        </li>);
}