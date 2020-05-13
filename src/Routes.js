import React from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Sobre from './components/Sobre/Sobre';
import Tarefas from './components/Tarefas/Tarefa';
import TarefasProvider from './context/TarefasContext';
import TurmaProvider from './context/TurmaContext';



export default function Routes(props) {
    return (
        <HashRouter>
            <Switch>
                <TurmaProvider>
                <TarefasProvider>
                    <Route path="/" exact component = {Home}/>
                    <Route path="/Sobre" component = {Sobre}/>
                    <Route path="/Tarefas" component = {Tarefas}/>
                </TarefasProvider>
                </TurmaProvider>
            </Switch>
        </HashRouter>
    );
}
