import React from 'react';

import './card.css';

export default function Card (props) {

    return (
        <div className = "custom-card" style={{
            backgroundColor: props.cor,
        }}>
            {props.icon}
            <span>
                {props.texto}
            </span>
        </div>
    );
}