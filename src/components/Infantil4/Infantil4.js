import React from 'react';
import HomePost from '../HomePost/HomePost';
import ImagensTarefa from '../ImagensTarefa/ImagensTarefa';

import trabalhoDirigido from '../../arq/trabalhoDirigido/4anos.docx';
import img1 from '../../img/infantil4/semana1/img1.jpg';
import img2 from '../../img/infantil4/semana1/img2.jpg';
import img3 from '../../img/infantil4/semana1/img3.jpg';
import img4 from '../../img/infantil4/semana1/img4.jpg';
import img5 from '../../img/infantil4/semana1/img5.jpg';
import img6 from '../../img/infantil4/semana1/img6.jpg';
import img7 from '../../img/infantil4/semana1/img7.jpg';
import img8 from '../../img/infantil4/semana1/img8.jpg';
import img9 from '../../img/infantil4/semana1/img9.jpg';
import img10 from '../../img/infantil4/semana2/img10.jpg';
import img11 from '../../img/infantil4/semana2/img11.jpg';
import img12 from '../../img/infantil4/semana2/img12.jpg';
import img13 from '../../img/infantil4/semana2/img13.jpg';
import img14 from '../../img/infantil4/semana2/img14.jpg';
import img15 from '../../img/infantil4/semana2/img15.jpg';
import img16 from '../../img/infantil4/semana3/img16.jpg';
import img17 from '../../img/infantil4/semana3/img17.jpg';
import img18 from '../../img/infantil4/semana3/img18.jpg';
import img19 from '../../img/infantil4/semana3/img19.jpg';
import img20 from '../../img/infantil4/semana3/img20.jpg';
import img21 from '../../img/infantil4/semana3/img21.jpg';
import img22 from '../../img/infantil4/semana3/img22.jpg';
import img23 from '../../img/infantil4/semana3/img23.jpg';
import img24 from '../../img/infantil4/semana3/img24.jpg';
import img25 from '../../img/infantil4/semana3/img25.jpg';
import img26 from '../../img/infantil4/semana4/img26.jpg';
import img27 from '../../img/infantil4/semana4/img27.jpg';
import img28 from '../../img/infantil4/semana4/img28.jpg';
import img29 from '../../img/infantil4/semana4/img29.jpg';
import img30 from '../../img/infantil4/semana4/img30.jpg';
import img31 from '../../img/infantil4/semana4/img31.jpg';
import img32 from '../../img/infantil4/semana4/img32.jpg';
import img33 from '../../img/infantil4/semana4/img33.jpg';
import img34 from '../../img/infantil4/semana5/img34.jpg';
import img35 from '../../img/infantil4/semana5/img35.jpg';
import img36 from '../../img/infantil4/semana5/img36.jpg';
import img37 from '../../img/infantil4/semana5/img37.jpg';
import img38 from '../../img/infantil4/semana5/img38.jpg';
import img39 from '../../img/infantil4/semana5/img39.jpg';
import img40 from '../../img/infantil4/semana5/img40.jpg';
import img41 from '../../img/infantil4/semana5/img41.jpg';
import img42 from '../../img/infantil4/semana5/img42.jpg';
import { TarefasContext } from '../../context/TarefasContext';



export default function infantil3(){
    const listaImagens = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
    const listaImagens2 = [ img10, img11, img12, img13, img14, img15];
    const listaImagens3 = [img16, img17, img18, img19, img20, img21, img22, img23, img24, img25];
    const listaImagens4 = [img26, img27, img28, img29, img30, img31, img32, img33];
    const listaImagens5 = [img34, img35, img36, img37, img38, img39, img40, img41, img42];
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
        video = "https://www.youtube.com/embed/aceTS2Z4F-M"
    />

    <HomePost 
        corFundo="#fff" 
        titulo= "Aula 2 - Português"
        video = "https://www.youtube.com/embed/7kjXTeRdVmA"
    />

    <HomePost 
        corFundo="#D3696C" 
        titulo= "Aula 3 - Matemática"
        video = "https://www.youtube.com/embed/Fms1FdvvF2g"
    />

<HomePost 
        corFundo="#fff" 
        titulo= "Aula 4 - Datas comemorativas"
        video = "https://www.youtube.com/embed/_taECuBe2oI"
    />

    <HomePost 
        corFundo="#4C94DE" 
        titulo= "Aula 5 - Linguagem 01"
        video = "https://www.youtube.com/embed/ed4W-USjh6o"
    />

<HomePost 
        corFundo="#fff" 
        titulo= "Aula 6 - Linguagem 02"
        video = "https://www.youtube.com/embed/MyScaaf2RIo"
    />

    <HomePost 
        corFundo="#FFF34A" 
        titulo= "Aula 7 - Linguagem 03"
        video = "https://www.youtube.com/embed/v_CUJhYxYVk"
    />

<HomePost 
        corFundo="#fff" 
        titulo= "Aula 8 - Matemática 01"
        video = "https://www.youtube.com/embed/1Jzr4CSCD8A"
    />

    <HomePost 
        corFundo="#9A4D89" 
        titulo= "Aula 9 - Matemática 02"
        video = "https://www.youtube.com/embed/KL7tKmjs6Is"
    />

    <HomePost 
        corFundo="#fff" 
        titulo= "Aula 10 - Matemática 03"
        video = "https://www.youtube.com/embed/ufZgdjU0wfg"
    />

<HomePost 
        corFundo="#FFF34A" 
        titulo= "Aula 11 - Linguagem 04"
        video = "https://www.youtube.com/embed/YIyjOv6xNDM"
    />

    <HomePost 
        corFundo="#fff" 
        titulo= "Aula 12 - Linguagem 01"
        video = "https://www.youtube.com/embed/wKKwF1W3P48"
    />

<HomePost 
        corFundo="#4C94DE" 
        titulo= "Aula 13 - Linguagem 02"
        video = "https://www.youtube.com/embed/1g8YEjuSFJI"
    />

<HomePost 
        corFundo="#fff" 
        titulo= "Aula 14 - Linguagem 03"
        video = "https://www.youtube.com/embed/H2cmtl3DKZQ"
    />

<HomePost 
        corFundo="#D3696C" 
        titulo= "Aula 15 - Matemática"
        video = "https://www.youtube.com/embed/8fL_nszEnsE"
    />

<HomePost 
        corFundo="#fff" 
        titulo= "Aula 16 - Natureza e Sociedade"
        video = "https://www.youtube.com/embed/_RSetW3zB2I"
    />

<HomePost 
        corFundo="#9A4D89" 
        titulo= "Aula 17 - Artes"
        video = "https://www.youtube.com/embed/8C-h6bhLXJE"
    />

<HomePost 
        corFundo="#fff" 
        titulo= "Aula 18 - Recreação"
        video = "https://www.youtube.com/embed/PW2uJX9Vt9Y"
    />

<HomePost 
        corFundo="#4C94DE" 
        titulo= "Aula 19 - Matemática 01"
        video = "https://www.youtube.com/embed/33RAgkjRjuQ"
    />

<HomePost 
        corFundo="#fff" 
        titulo= "Aula 20 - Matemática 02"
        video = "https://www.youtube.com/embed/jdytXi1OWIM"
    />

<HomePost 
        corFundo="#D3696C" 
        titulo= "Aula 21 - Matemática 03"
        video = "https://www.youtube.com/embed/RVuqttcNdSk"
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