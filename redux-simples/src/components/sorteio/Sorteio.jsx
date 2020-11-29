import React from 'react';
import { connect } from "react-redux";
import Card from "../card/Card"

const Sorteio = props => {
    const numRandom = (min, max) => {
        return parseInt(((Math.random() * (max - min)) + min));
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

const mapStateToProps = state => {
    return { min: state.numeros.min, max: state.numeros.max }
}

export default connect(mapStateToProps)(Sorteio);