import React from 'react';
import { connect } from "react-redux";
import Card from "../card/Card";

const Soma = props => {
    return (
        <Card title="Soma dos números" blue>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{props.min + props.max}</strong>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return { min: state.numeros.min, max: state.numeros.max }
}

export default connect(mapStateToProps)(Soma);