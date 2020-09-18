import React from 'react';
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho texto="Pedro" numero={20} bool={true}></DiretaFilho>
            <DiretaFilho texto="Leonardo" numero={17} bool={false}></DiretaFilho>
        </div>
    )
}