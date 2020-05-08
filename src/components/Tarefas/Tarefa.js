import React, { useContext } from 'react';
import NavBarGetsemani from '../NavBarGetsemani/NavBarGetsemani';
import Footer from '../Footer/Footer';
import { TarefasContext } from '../../context/TarefasContext'


export default function Tarefas(props){
    const {tarefa} = useContext(TarefasContext);

    return(
    <div>
         <NavBarGetsemani/>
            {tarefa}
         <Footer/>
    </div>);
}