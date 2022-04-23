import React from 'react';
import ReactDOM from "react-dom";
import './index.css';

/*import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

const el = document.getElementById('root');

ReactDOM.render(
    <div id='app'>
        <Primeiro></Primeiro>
        <ComParametro titulo="Situação do Aluno" aluno="Pedro Silva" nota={9.3}/>
        <ComParametro titulo="Situação do Aluno" aluno="Maria" nota="9.9"/>
        <Fragmento/>
    </div>, 
    el
);*/

import App from './App'

ReactDOM.render(
    <App/>, 
    document.getElementById('root')
);