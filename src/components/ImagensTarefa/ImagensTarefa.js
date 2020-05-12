import React from 'react';

export default function ImagensTarefa(props) {
    const imagens = props.imagens;

    return (
        <div className="container">
            <div className="post">
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
                <div className="row">
                    {imagens.map((imagem) => {
                        return (<a className='col-md-6' href={imagem} download> <img  className='col-md' src={imagem}></img></a>)
                    })}
                </div>
            </div>
        </div>
    )
}