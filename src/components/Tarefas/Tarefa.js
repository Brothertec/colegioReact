import React, { useContext } from 'react';
import NavBarGetsemani from '../NavBarGetsemani/NavBarGetsemani';
import Footer from '../Footer/Footer';
import Bercario from '../Bercario/Bercario';
import Infantil2 from '../Infantil2/Infantil2';
import { TurmaContext } from '../../context/TurmaContext';
import imagem from '../../img/home/gerenciamento-de-tarefas-670x419.png';

import './tarefa.css';
import BannerImage from '../BannerImage/BannerImage';

export default function Tarefas(props) {
    const { turma } = useContext(TurmaContext);

    return (
        <div>
            <NavBarGetsemani />
           <BannerImage
                imagem = {imagem}
                texto = 'Tarefas'
            />
            {turma === 'Bercario' &&
                <Bercario />
            }
            {turma === 'Infantil2' &&
                <Infantil2 />
            }
            <Footer />
        </div>);
}