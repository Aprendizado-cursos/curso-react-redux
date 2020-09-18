import React, { useState } from 'react'
import "./input.css"

export default props => {
    const [valor, setValor] = useState("Inicial");

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <input value={valor} onChange={e => setValor(e.target.value)}></input>
        </div>
    )
}