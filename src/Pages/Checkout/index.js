import React from 'react';
import { Main, Content, Left, Right } from './styles';
import Card from '../../Components/Card';
import PaymentForm from '../../Components/PaymentForm';
import Stepper from '../../Components/Stepper';

function Checkout(){

  const stepOptions = [
    { name: 'Carrinho', component: <PaymentForm /> },
    { name: 'Pagamento', component: <PaymentForm /> },
    { name: 'Confirmação', component: <PaymentForm /> }
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
