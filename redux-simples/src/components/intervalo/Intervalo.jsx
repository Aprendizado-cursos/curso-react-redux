import React from 'react';
import Card from "../card/Card";
import { connect } from "react-redux";
import {alterarNumeroMinimo, alterarNumeroMaximo} from "../../store/actions/numeros"
import "./intervalo.css"

const Intervalo = props => {


    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Minímo: </strong>
                    <input type="number" value={props.min} onChange={e => props.alterarNumeroMinimo(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input type="number" value={props.max} onChange={e => props.alterarNumeroMaximo(+e.target.value)}/>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return (
        {
            min: state.numeros.min,
            max: state.numeros.max
        }
    )
}

const mapDispatchToProps = dispatch => {
    return (
        {
            alterarNumeroMinimo(novoNumero) {
                const action = alterarNumeroMinimo(novoNumero);
                dispatch(action);
            },
            alterarNumeroMaximo(novoNumero) {
                const action = alterarNumeroMaximo(novoNumero);
                dispatch(action);
            }
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);