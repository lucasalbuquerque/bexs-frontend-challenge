import React from 'react';
import { Main, Content, Left, Right } from './styles';
import Card from '../../Components/Card';
import PaymentForm from '../../Components/PaymentForm';
import Stepper from '../../Components/Stepper';

function Checkout(){

  const stepOptions = [
    { name: 'Carrinho', component: <PaymentForm />, status: true },
    { name: 'Pagamento', component: <PaymentForm />, status: false },
    { name: 'Confirmação', component: <PaymentForm />, status: false }
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
