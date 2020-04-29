import * as CreditCardTypes from './types';

function CheckIfHaveNewValue(payloadType, stateType){
  if(payloadType && payloadType !== stateType){
    return payloadType
  }
  return stateType
}

function CreditCardReducer(state, action){

  const payload = action.payload.value;

  const data = {
    type: CheckIfHaveNewValue(payload.type, state.type),
    flip: payload.flip,
    number: CheckIfHaveNewValue(payload.number, state.number),
    name: CheckIfHaveNewValue(payload.name, state.name),
    expiry: CheckIfHaveNewValue(payload.expiry, state.expiry),
    cvv: CheckIfHaveNewValue(payload.cvv, state.cvv)
  }

  if(!action.payload)
  return state

  switch(action.type){
    case CreditCardTypes.SEND:
      return data;
    default:
      throw new Error();
  }
}

export default CreditCardReducer
