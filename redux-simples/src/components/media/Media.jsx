import React from 'react';
import { connect } from "react-redux"
import Card from "../card/Card"

const Media = props => {
    const media = (props.max + props.min) / 2
    return (
        <Card title="Média dos números" green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{media}</strong>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return { min: state.numeros.min, max: state.numeros.max }
}

export default connect(mapStateToProps)(Media);