import React, { useReducer } from 'react';
import CreditCardContext from './context';
import CreditCardReducer from './reducer';

function Provider({ children }){

  const defaultValue = {
    type: 'DEFAULT',
    flip: false,
    number: '* * * * * * * * * * * * * * * *',
    name: 'NOME DO TITULAR',
    expiry: '00/00',
    cvv: '***'
  }

  const [CreditCard, setCreditCard] = useReducer(CreditCardReducer, defaultValue);

  return (
    <CreditCardContext.Provider value={{CreditCard, setCreditCard }}>
    {children}
    </CreditCardContext.Provider>
  )
}

export default Provider
