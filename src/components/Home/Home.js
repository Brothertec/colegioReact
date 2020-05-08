import React from 'react';

import Carousel from '../Carousel/Carousel';
import CardBootstrap from '../CardBootstrap/CardBootstrap';

import imagemCard2 from '../../img/home/gerenciamento-de-tarefas-670x419.png';

import '../../global.css';

import HomePost from '../HomePost/HomePost';
import biblioteca from '../../img/home/bibliotecas.png';
import linguas from '../../img/home/linguas.jpg';

import arqHistoriaCorona from '../../arq/historiacoronavirus.pdf';
import NavBarGetsemani from '../NavBarGetsemani/NavBarGetsemani';
import Footer from '../Footer/Footer';

export default function Home() {
    return (
        <div>
            <NavBarGetsemani />
            <Carousel />
            <CardBootstrap list={[
                {
                    titulo: "Escola Bilíngue",
                    texto: "Inglês e Espanhol",
                    imagem: linguas
                },
                {
                    titulo: "Recreação e Biblioteca",
                    // texto: "Texto card 2",
                    imagem: biblioteca
                },
                {
                    titulo: "Atividades Especiais",
                    // texto: "Texto card 3",
                    imagem: imagemCard2
                }
            ]} />
            <HomePost corFundo="#cae1f9"
                titulo="Informativo sobre o coronavírus"
                principal={`Com a escalada do número de pacientes infectados com a Covid-19, doença transmitida pelo coronavírus, o Governo do Distrito Federal teve que tomar novas medidas duras para tentar conter o avanço da pandemia na capital federal. No novo decreto Ficam suspensasas atividades educacionais em todas as escolas, universidades e faculdades, das redes de ensino pública e privada, no âmbito do Distrito Federal, até o dia 31 de maio de 2020. 

O novo decreto do governador Ibaneis Rocha (DECRETO Nº 40.583, DE 1º DE ABRIL DE 2020) revoga os demais – nºs 40.550/2020, de 23 de março de 2020; 40.520, de 14 de março de 2020; 40.522, de 15 de março de 2020; 40.529, de 18 de março de 2020; e 40.537, de 18 de março de 2020 – que tratavam separadamente do fechamento desses recintos.`}
                video="https://www.youtube.com/embed/7i9I8lGTD58" />
            <HomePost corFundo="#fff"
                titulo="O coronavírus e eu"
                link={{
                    href: arqHistoriaCorona,
                    options: {
                        target: "_blank"
                    },
                    texto: "Clique para ver A história da ostra e da borboleta"
                }}
            />
            <Footer/>
        </div>

    );
}