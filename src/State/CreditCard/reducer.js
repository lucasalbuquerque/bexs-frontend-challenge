import * as CreditCardTypes from './types';

function CreditCardReducer(state, action){

    console.log('state', state);
    console.log('action', action);

    switch(action.type){
        case CreditCardTypes.SEND:
            return state;
        default:
            throw new Error();
    }
}

export default CreditCardReducer
