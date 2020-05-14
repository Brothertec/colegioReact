import React from 'react';

import './nav.css';
import { Link } from 'react-router-dom';

export default function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
            <img className="logo" src={props.logo} alt="" />
            <Link className="navbar-brand" to="/" > Colégio Jardim Getsêmani </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" ></span>
            </button >
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav ">
                    {props.children}
                </ul>
            </div>
        </nav >
    );

}