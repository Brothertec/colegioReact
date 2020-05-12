import React from 'react';
import HomePost from '../HomePost/HomePost';
import ImagensTarefa from '../ImagensTarefa/ImagensTarefa';

import trabalhoDirigido from '../../arq/trabalhoDirigido/berçario.docx';
import img1 from '../../img/bercario/img1.jpg';
import img2 from '../../img/bercario/img2.jpg';
import img3 from '../../img/bercario/img3.jpg';
import img4 from '../../img/bercario/img4.jpg';
import { TarefasContext } from '../../context/TarefasContext';

export default function Bercario() {
    const listaImagens = [img1, img2, img3, img4];

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
                video = "https://www.youtube.com/embed/GoK6bZOfEzs"
            />

            <HomePost 
                corFundo="#fff" 
                titulo= "Aula 2"
                video = "https://www.youtube.com/embed/CrakjZmsi-k"
            />

            <HomePost 
                corFundo="#D3696C" 
                titulo= "Aula 3 - Português"
                video = "https://www.youtube.com/embed/a3T6_QfukDs"
            />
            <ImagensTarefa 
                corFundo="#fff" 
                titulo= "Tarefa semanal 05"
                principal="27/abril até 01/maio. Clique nas imagens para baixar a tarefa."
                imagens = {listaImagens}
            />
        </div>


    );
}