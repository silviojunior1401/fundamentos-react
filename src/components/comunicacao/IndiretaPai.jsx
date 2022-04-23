import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {
    const [nome, setNome] = useState('??')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    // nome idade nerd
    function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
       /* nome = nomeParam
        idade = idadeParam
        nerd = nerdParam
        console.log(nome, idade, nerd)*/

        setNome(nomeParam)
        setIdade(idadeParam)
        setNerd(nerdParam)
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong> </span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>

            <IndiretaFilho quandoClicar={fornecerInformacoes}/>
        </div>
    )
}