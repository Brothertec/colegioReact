import React, { useState} from 'react';

import Routes from './Routes';

const TarefaContext = React.createContext('Bercario');

function App() {

  

  return (
    <div>
      <Routes/> 
    </div>   
  );
}

export default App;
