import React from 'react';

import './homepost.css';

export default function HomePost(props) {

    return (
        <div className="post" style={{
            backgroundColor: props.corFundo,
        }}>
            <div className="container">
                <div className="row">
                    <h3>{props.titulo}</h3>
                </div>
                {props.principal &&
                    <div className="row">
                        <p className="lead lead--resizible">
                            {props.principal}
                        </p>
                    </div>
                }
                {props.video &&
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src={props.video} allowFullScreen title="video"></iframe>
                    </div>
                }

                {props.link &&
                    <div className="row">
                        <a href={props.link.href} target={props.link.options.target}>{props.link.texto}</a>
                    </div>
                }
            </div>
        </div>
    );
}