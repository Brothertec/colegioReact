import React from 'react';
import HomePost from '../HomePost/HomePost';
import ImagensTarefa from '../ImagensTarefa/ImagensTarefa';

import trabalhoDirigido from '../../arq/trabalhoDirigido/berçario.docx';
import img1 from '../../img/bercario/semana4/img1.jpg';
import img2 from '../../img/bercario/semana4/img2.jpg';
import img3 from '../../img/bercario/semana4/img3.jpg';
import img4 from '../../img/bercario/semana5/img4.jpg';
import img5 from '../../img/bercario/semana5/img5.jpg';
import img6 from '../../img/bercario/semana5/img6.jpg';
import img7 from '../../img/bercario/semana5/img7.jpg';
import img8 from '../../img/bercario/semana5/img8.jpg';
import img9 from '../../img/bercario/semana7/img9.jpeg';
import img10 from '../../img/bercario/semana7/img10.jpeg';
import img11 from '../../img/bercario/semana7/img11.png';
import img12 from '../../img/bercario/semana7/img12.png';
import img13 from '../../img/bercario/semana7/img13.jpeg';
import img14 from '../../img/bercario/semana7/img14.jpeg';
import img15 from '../../img/bercario/semana7/img15.jpeg';
import img16 from '../../img/bercario/semana7/img16.jpeg';
import img17 from '../../img/bercario/semana7/img17.jpeg';
import { TarefasContext } from '../../context/TarefasContext';

export default function Bercario() {
    const listaImagens =[];
    const listaImagens4 = [img1, img2, img3];
    const listaImagens5 = [img4, img5, img6, img7, img8];
    const listaImagens7 = [img9, img10, img11, img12, img13, img14, img15, img16, img17];
    return (
        <div>
            <HomePost
                corFundo="#cae1f9"
                titulo="Trabalho Dirigido"
                principal="Segue disponível para download o trabalho dirigido."
                link={{
                    href: trabalhoDirigido,
                    options: {
                        target: "_blank"
                    },
                    texto: "Clique para acessar o trabalho dirigido"
                }}
            />
 <HomePost 
        corFundo ="#fff" 
        titulo = "Vídeo Aula Semanal"
        video = "https://www.youtube.com/embed/kZvow_QvuJo"
    />
    <HomePost 
        corFundo="#9A4D89" 
        titulo= "Aula 1"
        video = "https://www.youtube.com/embed/Djl6rMmzl7M"
    />

    <HomePost 
        corFundo="#fff" 
        titulo= "Aula 2"
        video = "https://www.youtube.com/embed/fUNoZc_FY1k"
    />

    <HomePost 
        corFundo="#D3696C" 
        titulo= "Aula 3 - Português"
        video = "https://www.youtube.com/embed/FY7fDIGMEas"
    />

<HomePost 
        corFundo="#fff" 
        titulo= "Aula 4"
        video = "https://www.youtube.com/embed/m6xCuqMvb7A"
    />

    <HomePost 
        corFundo="#4C94DE" 
        titulo= "Aula 5 - Português"
        video = "https://www.youtube.com/embed/3E145UlE1fE"
    />

<HomePost 
        corFundo="#fff" 
        titulo= "Aula 6"
        video = "https://www.youtube.com/embed/dxuI0RVNA4Q"
    />

    <HomePost 
        corFundo="#FFF34A" 
        titulo= "Aula 7 - Formas Geométricas 01"
        video = "https://www.youtube.com/embed/AJXH-EPipzY"
    />

<HomePost 
        corFundo="#fff" 
        titulo= "Aula 8 - Formas Geométricas 02"
        video = "https://www.youtube.com/embed/RTpzYDB7WGc"
    />

    <HomePost 
        corFundo="#9A4D89" 
        titulo= "Aula 9 - Vogais"
        video = "https://www.youtube.com/embed/ry53Tx5SWd0"
    />

    <HomePost 
        corFundo="#fff" 
        titulo= "Aula 10 - Cores"
        video = "https://www.youtube.com/embed/_lCFJFzkDPE"
    />

<HomePost 
        corFundo="#FFF34A" 
        titulo= "Aula 11"
        video = "https://www.youtube.com/embed/TQ7Epb0sheM"
    />

    <HomePost 
        corFundo="#fff" 
        titulo= "Aula 12 - Matemática"
        video = "https://www.youtube.com/embed/o3pxCTaG8gE"
    />

<HomePost 
        corFundo="#4C94DE" 
        titulo= "Aula 13 - Vogais"
        video = "https://www.youtube.com/embed/BqcQ4-sugEQ"
    />

<HomePost 
        corFundo="#fff" 
        titulo= "Aula 14 - Datas comemorativas"
        video = "https://www.youtube.com/embed/MAN7_IuUhzM"
    />

    <HomePost 
        corFundo="#D3696C" 
        titulo= "Aula 15 - Matemática"
        video = "https://www.youtube.com/embed/o-yYqwuHDCQ"
    />

<HomePost 
        corFundo="#fff" 
        titulo= "Aula 16"
        video = "https://www.youtube.com/embed/YoWEaJ-N5EM"
    />


<ImagensTarefa 
        corFundo="#fff" 
        titulo= "Tarefa semanal 07"
        principal="13/maio até 15/maio. Clique nas imagens para baixar a tarefa."
        imagens = {listaImagens7}
       />

<ImagensTarefa 
        corFundo="#fff" 
        titulo= "Tarefa semanal 06 - TRABALHO DIRIGIDO"
        principal="02/maio até 12/maio."
        imagens = {listaImagens}
       />

<ImagensTarefa 
        corFundo="#fff" 
        titulo= "Tarefa semanal 05"
        principal="27/abril até 01/maio. Clique nas imagens para baixar a tarefa."
        imagens = {listaImagens5}
       />
        <ImagensTarefa 
        corFundo="#fff" 
        titulo= "Tarefa semanal 04"
        principal="20/abril até 24/abril. Clique nas imagens para baixar a tarefa."
        imagens = {listaImagens4}
       />
        </div>


    );
}