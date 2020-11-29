import React from 'react';
import Card from "../card/Card"

export default props => {
    const numRandom = (min, max) => {
        return parseInt((Math.random() * (max - min)) + min);
    }

    return (
        <Card title="Sorteio de um número" purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{numRandom(props.min, props.max)}</strong>
                </span>
            </div>
        </Card>
    )
}