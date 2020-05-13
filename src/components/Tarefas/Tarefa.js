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

export default function Tarefas(props) {
    const { turma } = useContext(TurmaContext);

    return (
        <div>
            <NavBarGetsemani />
            <div style={{
                width: '100%',
                height: '400PX',
                backgroundImage: `url(${imagem})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="container">
                    <div class="row align-items-center justify-content-center texto-titulo">
                        <div class="col-md-9  text-center">
                            <h1 class="mb-2 bread" style={{lineHeight: '400px', fontWeight: '900', fontSize : '40px', color: '#'}}>Tarefas</h1>
                        </div>
                    </div>
                </div>
            </div>
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