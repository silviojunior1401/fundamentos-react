import React from "react";
// retorna um array com produtos
import produtos from "../../data/produtos";

export default (props) => {
    const produtosLI = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 === 0 ? "Par" : "Impar"}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco.toFixed(2).replace('.',',')}</td>
            </tr>
        );
    });

    return (
        <table border="1" className="Table">
            <tr>
                <th>Número</th>
                <th>Produto</th>
                <th>Preço</th>
            </tr>
            {produtosLI}
        </table>
    );
};
