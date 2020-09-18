import React from 'react';
import produtos from '../../data/produtos'
import './TabelaProdutos.css'

export default props => {
    const products = produtos.map((pro, i) => {
        return (
            <tr className={i % 2 === 0 ? 'Par': ''} key={pro.id}>
                <td>{pro.id}</td>
                <td>{pro.nome}</td>
                <td>{pro.preco}</td>
            </tr>
        )
    });

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {products}
                </tbody>
            </table>
        </div>
    )
}