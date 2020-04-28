import React from 'react';
import { Main, Content, Left, Right } from './styles';
import Card from '../../Components/Card';
import PaymentForm from '../../Components/PaymentForm';
import Stepper from '../../Components/Stepper';

function Checkout(){

  const stepOptions = [
    { name: 'Carrinho', component: <Card />, current: false },
    { name: 'Pagamento', component: <PaymentForm />, current: true },
    { name: 'Confirmação', component: <PaymentForm />, current: false }
  ]

  return (
    <Main>
      <Content className="container">
      <Left>
        <Card />
      </Left>
      <Right>
        <Stepper steps={stepOptions} />
      </Right>
      </Content>
    </Main>
  )
}

export default Checkout
