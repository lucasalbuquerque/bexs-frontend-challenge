import React from 'react';
import { Main, Content, Left, Right } from './styles';
import Card from '../../Components/Card';
import PaymentForm from '../../Components/PaymentForm';
import Stepper from '../../Components/Stepper';

function Checkout(){

  const stepOptions = [
    { id: 1, name: 'Carrinho', component: <PaymentForm />, current: false },
    { id: 2, name: 'Pagamento', component: <PaymentForm />, current: true },
    { id: 3, name: 'Confirmação', component: <PaymentForm />, current: false }
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
