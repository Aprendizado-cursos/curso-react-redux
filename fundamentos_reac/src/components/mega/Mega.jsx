import React, { useState } from 'react';
import geraArrayNumeros from "./numeroMega"
import "./numeroMega.css"

export default props => {
    const [numeros, setNumero] = useState("");
    const [quantidade, setQuant] = useState(1);

    function geraNumeros(quantidade) {
        let arrayNum = geraArrayNumeros(quantidade);
        arrayNum = arrayNum.map((num, id) => {
            return (<div className ="divNumero" key={id}>{num}</div>);
        });
        return arrayNum;
    }

    function addNumsInDocument() {
        let arrayNum = geraNumeros(quantidade);
        setNumero(arrayNum);
    }

    function setNumQuant(e) {
        if (e.target.value > 0 && e.target.value <= 100)
            setQuant(+e.target.value)
    }

    return (
        <div className="Mega">
            <h3>Números da Mega</h3>

            <button onClick={e => addNumsInDocument()}>Gerar números</button>
            <input value={quantidade} onChange={e => setNumQuant(e)} type="number" />

            <div id="divNumeros">
                {numeros}
            </div>
        </div>
    );
}