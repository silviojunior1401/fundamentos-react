import React from "react";

export default (props) => {
    const { inicio, fim } = props;

    var min = Math.ceil(inicio);
    var max = Math.floor(fim);

    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>Valor Mínimo: {min}</p>
            <p>Valor Máximo: {max}</p>
            <p>
                Número gerado: {Math.floor(Math.random() * (max - min)) + min}
            </p>
        </div>
    );
};
