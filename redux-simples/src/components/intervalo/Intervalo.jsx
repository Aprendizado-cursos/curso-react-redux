import React from 'react';
import Card from "../card/Card"
import "./intervalo.css"

export default props => {
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
            <span>
                <strong>Minímo: </strong>
                <input type="number" value={0} readOnly/>
            </span>
            <span>
                <strong>Máximo: </strong>
                <input type="number" value={10} readOnly/>
            </span>
            </div>           
        </Card>
    )
}