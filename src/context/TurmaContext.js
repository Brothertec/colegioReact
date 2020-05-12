import React from 'react';
import { useState } from 'react';

export const TurmaContext = React.createContext();

export default function TurmaProvider(props){
    const [turma, setTurma] = useState(0);

    return <TurmaContext.Provider value={{turma, setTurma}}>{props.children}</TurmaContext.Provider>
}