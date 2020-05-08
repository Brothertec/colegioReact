import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TarefasContext } from '../../context/TarefasContext';


export default function NavDropDownItem(props) {
    const {tarefa, setTarefa} = useContext(TarefasContext);

    
    function definirTarefa(){
        setTarefa(props.componente);
        console.log(tarefa);
    }



    function getItem() {
        if (props.link) {
            return (<Link to={props.link} className="dropdown-item" > {props.nome} </Link>);
        }
        else {
            return (<button className="dropdown-item" data-toggle="modal" data-target="#modal-senha" onClick={definirTarefa} > {props.nome} </button>);
        }
    }
    return getItem();

}