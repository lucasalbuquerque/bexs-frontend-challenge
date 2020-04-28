import React from 'react';
import iconCard from './assets/icon-card.png';
import iconLeft from './assets/left.png';
import { Area, Navigation } from './style';
import fixed from './assets/fixed.png';

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
    <img src={fixed} />
    </>
  )
}

export default Card
