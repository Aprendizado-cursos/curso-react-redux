import React from 'react';
import Card from "../card/Card"

export default props => {
    return (
        <Card title="Média dos números" green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{(props.max + props.min) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}