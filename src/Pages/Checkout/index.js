import React from 'react';
import { Main, Left, Content } from './styles';
import Card from '../../Components/Card';

function Checkout(){
  return (
    <Main>
      <Content className="container">
      <Left>
        <Card />
      </Left>
      </Content>
    </Main>
  )
}

export default Checkout
