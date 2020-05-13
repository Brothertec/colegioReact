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
                        return (<div className='col-md-6' style={{ marginTop: '20px'}}><a  style={{border:'solid', display:'block', height: '100%'}} href={imagem} download> <img  className='img-fluid' src={imagem}></img></a></div>)
                    })}
                </div>
            </div>
        </div>
    )
}