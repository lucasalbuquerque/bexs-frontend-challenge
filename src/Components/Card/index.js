import React from 'react';
import iconCard from './assets/icon-card.png';
import iconLeft from '../../Assets/left.png';
import { Area, Navigation } from './style';
import CreditCard from '../CreditCard';

function Card(){
  return (
    <>
    <Navigation>
      <img src={iconLeft} />
      <h2>Alterar forma de pagamento</h2>
    </Navigation>
    <Area>
      <img src={iconCard} height="50" />
      <h3>Adicione um novo cartão de crédito</h3>
    </Area>
    <CreditCard />
    </>
  )
}

export default Card
