import React from 'react';

export default props => {
    const elseChild = React.Children.toArray(props.children).filter(child => {
        return child.type && child.type.name === 'Else';
    })[0];

    const ifChildren = React.Children.toArray(props.children).filter(child => {
        return child !== elseChild;
    });

    if (props.test) {
        return ifChildren
    }
    else if(elseChild){
        return false;
    }
    else {
        return false;
    }
}

export const Else = props => props.children;

