import React from 'react';

import './card-block.css';

export default function CardBlock(props){
    return(
        <div className="card-block">
            {props.children}
        </div>
    );
}