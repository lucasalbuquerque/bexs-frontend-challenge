import React from 'react';
import { Main, Content, Left, Right } from './styles';
import Card from '../../Components/Card';

import PaymentForm from '../../Components/PaymentForm'

function Checkout(){
  return (
    <Main>
      <Content className="container">
      <Left>
        <Card />
      </Left>
      <Right>
        <PaymentForm />
      </Right>
      </Content>
    </Main>
  )
}

export default Checkout
