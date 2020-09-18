import React from 'react'
import numAleatorio from "../../utils/randomNum";

export default props => (
    <h1>{numAleatorio(props.min, props.max)}</h1>
);