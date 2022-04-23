import React, { useState } from "react";

export default (props) => {
	const [qtde, setQtde] = useState(props.numeroInicial || 6);
	const [numeros, setNumeros] = useState([]);

    function gerarNumeros() {
        var min = 1;
        var max = 60;
        var numeros = [];
        if(qtde <= 60) {
            for (var i = 0; i < qtde; i++) {
                var temp = Math.floor(Math.random() * (max - min + 1)) + min;
                if (numeros.indexOf(temp) === -1) {
                    numeros.push(temp);
                } else i--;
            }
            setNumeros(numeros.sort((n1, n2) => n1 - n2))
        } else {console.log("Não é possível gerar mais do que 60 números")}
    }

    function numerosString() {
        /*var string = "";
        numeros.forEach(numero => {
            string = string + numero + ", ";
        })
        string = string.substring(0, string.length-2)
        return string*/
        return numeros.join(', ')
    }

	return (
		<div>
			<h2>Mega</h2>
			<p>{numerosString()}</p>
			<div >
				<label htmlFor="qtdeInput" style={{"margin-right": "10px"}}>Quantidade Nºs: </label>
				<input
                    style={{fontSize: "1.4rem",
                    width: "60px"}}
					id="qtdeInput"
					type="number"
					value={qtde}
					onChange={e => setQtde(+e.target.value)}
				/>
			</div>
			<button onClick={gerarNumeros}>Gerar Números</button>
		</div>
	);
};
