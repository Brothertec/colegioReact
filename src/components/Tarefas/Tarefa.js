import React, { useContext } from 'react';
import NavBarGetsemani from '../NavBarGetsemani/NavBarGetsemani';
import Footer from '../Footer/Footer';
import Bercario from '../Bercario/Bercario';
import Infantil2 from '../Infantil2/Infantil2';
import Infantil3 from '../Infantil3/Infantil3';
import Infantil4 from '../Infantil4/Infantil4';
import Infantil5 from '../Infantil5/Infantil5';
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
            {turma === 'Infantil3' &&
                <Infantil3 />
            }
             {turma === 'Infantil4' &&
                <Infantil4 />
            }
             {turma === 'Infantil5' &&
                <Infantil5 />
            }
            <Footer />
        </div>);
}