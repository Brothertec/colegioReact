import React from 'react';


import imagemCard1 from '../../img/home/Parque-min.jpg';


import './sobre.css';
import NavBarGetsemani from '../NavBarGetsemani/NavBarGetsemani';
import Footer from '../Footer/Footer';
import imagem from '../../img/sobre/jess-bailey-l3N9Q27zULw-unsplash.jpg';
import BannerImage from '../BannerImage/BannerImage';
import HomePost from '../HomePost/HomePost';


export default function Sobre() {
    return (
        <div>
            <NavBarGetsemani />
            <BannerImage 
                imagem = {imagem}
                texto = 'Sobre Nós'
            />
            <HomePost
                corFundo = '#9B73A9'
                titulo = 'O que oferecemos'
                principal = {`Prezados Pais e/ou responsáves, somos hoje uma escola credenciada pela Secretaria de Educação do Distrito Federal. Demonstrando assim o nosso compromisso público com o educar e cuidar. Movidos pelo compromisso de educar para transformar e visando oferecer aos nossos alunos uma educação de excelência.

                A confiança em nosso trabalho e a parceria entre família e escola nos conduzirão ao sucesso!
                `}
            />
            <Footer />
        </div>


    );
}