import React from 'react';
import iconCard from './assets/icon-card.png';
import { Area } from './style';
import fixed from './assets/fixed.png';

function Card(){
  return (
    <>
    <Area>
      <img src={iconCard} height="50" />
      <h2>Adicione um novo cartão de crédito</h2>
    </Area>
    <img src={fixed} />
    </>
  )
}

export default Card
