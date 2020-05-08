import React from 'react';

import img1 from '../../img/home/img1.jpg';
import img2 from '../../img/home/img2.jpg';
import img3 from '../../img/home/img3.jpg';

import './carousel.css';


export default function Carosel() {
    var listaImages = [img1, img2, img3];

    function setImagens(img) {
        var sectionStyle = {
            backgroundImage: `url(${img})`,
        };
        return sectionStyle;
    };

    function renderCarousel(classe, imagem){
        return (
            <div className={classe}>
                {/* <img src={img1} className="d-block w-100" alt="..." /> */}
                <div className="carousel-img-bcg" style={setImagens(imagem)}></div>
            </div>
        )
    };


    return (
        <div id="carouselKids" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselKids" data-slide-to="0" className="active" key="1"></li>
                <li data-target="#carouselKids" data-slide-to="1" key="2"></li>
                <li data-target="#carouselKids" data-slide-to="2" key="3"></li>
            </ol>
            <div className="carousel-inner">
                {listaImages.map((imagem, index) => {
                    var classe = "carousel-item";
                    if (index === 0){
                        classe += " active"
                    } 
                    return renderCarousel(classe,imagem);
                }
                )}

            </div>
            <a className="carousel-control-prev" href="#carouselKids" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselKids" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

//  <div className="carousel-item active">
                //     {/* <img src={img1} className="d-block w-100" alt="..." /> */}
                //     <div className="carousel-img-bcg" style={sectionStyle}></div>
                // </div>
                // <div className="carousel-item">
                //     <img src={img2} className="d-block w-100" alt="..." />
                // </div>
                // <div className="carousel-item">
                //     <img src={img3} className="d-block w-100" alt="..." />
                // </div>