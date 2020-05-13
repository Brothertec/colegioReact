import React from 'react';
import HomePost from '../HomePost/HomePost';
import ImagensTarefa from '../ImagensTarefa/ImagensTarefa';

import trabalhoDirigido from '../../arq/trabalhoDirigido/3anos.docx';
import img1 from '../../img/infantil3/semana1/img1.jpg';
import img2 from '../../img/infantil3/semana1/img2.jpg';
import img3 from '../../img/infantil3/semana1/img3.jpg';
import img4 from '../../img/infantil3/semana1/img4.jpg';
import img5 from '../../img/infantil3/semana1/img5.jpg';
import img6 from '../../img/infantil3/semana1/img6.jpg';
import img7 from '../../img/infantil3/semana1/img7.jpg';
import img8 from '../../img/infantil3/semana1/img8.jpg';
import img9 from '../../img/infantil3/semana2/img9.jpg';
import img10 from '../../img/infantil3/semana2/img10.jpg';
import img11 from '../../img/infantil3/semana2/img11.jpg';
import img12 from '../../img/infantil3/semana2/img12.jpg';
import img13 from '../../img/infantil3/semana2/img13.jpg';
import img14 from '../../img/infantil3/semana2/img14.jpg';
import img15 from '../../img/infantil3/semana3/img15.jpg';
import img16 from '../../img/infantil3/semana3/img16.jpg';
import img17 from '../../img/infantil3/semana3/img17.jpg';
import img18 from '../../img/infantil3/semana3/img18.jpg';
import img19 from '../../img/infantil3/semana3/img19.jpg';
import img20 from '../../img/infantil3/semana3/img20.jpg';
import img21 from '../../img/infantil3/semana3/img21.jpg';
import img22 from '../../img/infantil3/semana3/img22.jpg';
import img23 from '../../img/infantil3/semana4/img23.jpg';
import img24 from '../../img/infantil3/semana4/img24.jpg';
import img25 from '../../img/infantil3/semana4/img25.jpg';
import img26 from '../../img/infantil3/semana4/img26.jpg';
import img27 from '../../img/infantil3/semana4/img27.jpg';
import img28 from '../../img/infantil3/semana4/img28.jpg';
import img29 from '../../img/infantil3/semana4/img29.jpg';
import img30 from '../../img/infantil3/semana5/img30.jpg';
import img31 from '../../img/infantil3/semana5/img31.jpg';
import img32 from '../../img/infantil3/semana5/img32.jpg';
import img33 from '../../img/infantil3/semana5/img33.jpg';
import img34 from '../../img/infantil3/semana5/img34.jpg';
import img35 from '../../img/infantil3/semana5/img35.jpg';
import { TarefasContext } from '../../context/TarefasContext';



export default function infantil3(){
    const listaImagens = [img1, img2, img3, img4, img5, img6, img7, img8];
    const listaImagens2 = [img9, img10, img11, img12, img13, img14];
    const listaImagens3 = [img15, img16, img17, img18, img19, img20, img21, img22];
    const listaImagens4 = [img23, img24, img25, img26, img27, img28, img29];
    const listaImagens5 = [img30, img31, img32, img33, img34, img35];
    return(
        <div>  <HomePost
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
        <ImagensTarefa 
        corFundo="#fff" 
        titulo= "Tarefa semanal 03"
        principal="13/abril até 17/abril. Clique nas imagens para baixar a tarefa."
        imagens = {listaImagens3}
       />
        <ImagensTarefa 
        corFundo="#fff" 
        titulo= "Tarefa semanal 02"
        principal="06/abril até 10/abril. Clique nas imagens para baixar a tarefa."
        imagens = {listaImagens2}
       />
        <ImagensTarefa 
        corFundo="#fff" 
        titulo= "Tarefa semanal 01"
        principal="30/março até 03/abril. Clique nas imagens para baixar a tarefa."
        imagens = {listaImagens}
       />
    </div>


    );
}