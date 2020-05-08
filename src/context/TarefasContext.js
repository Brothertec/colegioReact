import React from 'react';
import { useState } from 'react';

export const TarefasContext = React.createContext();

export default function TarefasProvider(props){
    const [tarefa, setTarefa] = useState(0);

    return <TarefasContext.Provider value={{tarefa, setTarefa}}>{props.children}</TarefasContext.Provider>
}