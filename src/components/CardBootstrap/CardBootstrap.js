import React from 'react';

import './cardBootstrap.css';

export default function CardBootstrap(props) {
    return (
        // <div classNameName="container" style={{ marginTop: "45px", marginBottom: "45px"}}>
            <div className="card-deck" style={{ marginTop: "45px", marginBottom: "45px", marginLeft: "45px", marginRight: "45px"}}>
                {props.list.map((cardProps) => {
                    return (
                        <div className="card">
                            <div style={{
                                backgroundImage:  `url(${cardProps.imagem})`,
                                }} className="card-img-top card-img-top--size" />
                            <div className="card-body">
                                <h5 className="card-title">{cardProps.titulo}</h5>
                                <p className="card-text">{cardProps.texto}</p>
                            </div>
                        </div>);
                })}
            </div>
        // </div>
    );
}