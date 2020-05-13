import React from 'react';

export default function BannerImage(props) {
    return (
        <div style={{
            width: '100%',
            height: '600px',
            backgroundImage: `url(${props.imagem})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className="container">
                <div class="row align-items-center justify-content-center texto-titulo">
                    <div class="col-md-9  text-center">
                        <h1 class="mb-2 bread" style={{ lineHeight: '400px', fontWeight: '900', fontSize: '40px', color: '#' }}>{props.texto}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}