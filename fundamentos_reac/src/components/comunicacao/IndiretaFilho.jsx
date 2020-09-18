import React from 'react';

export default props => {
    const max = 70;
    const min = 50;
    const gerarIdade = () => parseInt(Math.random() * (max - min) + min);

    return (
        <div>
            <div>Filho</div>
            <button onClick={e => props.quandoClicar("João", gerarIdade(), true)}>Fornecer Informações</button>
        </div>
    )
}