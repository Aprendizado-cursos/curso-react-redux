import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
    numeros: function (state, action) {
        console.log(state, "", action);
        return { min: 7, max: 31 }
    },
    nomes: (state, action) => {
        console.log(state, "", action);
        return [
            "ana", "Bia", "Carlos"
        ]
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig;