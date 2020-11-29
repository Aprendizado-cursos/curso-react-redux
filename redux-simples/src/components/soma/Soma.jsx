import React from 'react';
import Card from "../card/Card"

export default props => {
    return (
        <Card title="Soma dos números" blue>
            <div>
            <span>
                <span>Resultado: </span>
                <strong>{(props.max + props.min)}</strong>
            </span>
            </div>           
        </Card>
    )
}