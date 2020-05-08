import React from 'react';

import './nav.css';

export default function Nav(props) {
    return (< nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
        <img className="logo" src={props.logo} alt="" />
        <a className="navbar-brand" href="/" > Colégio Jardim Getsêmani </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" ></span>
        </button >
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                {props.children}
                <li className="nav-item" >
                    <a className="nav-link disabled"
                        href="#"
                        tabIndex="-1"
                        aria-disabled="true" > Disabled </a> </li > </ul> <form className="form-inline my-2 my-lg-0" >
                <input className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search" />
                <button className="btn btn-outline-light my-2 my-sm-0   "
                    type="submit" > Search </button> </form> </div> </nav >);

}