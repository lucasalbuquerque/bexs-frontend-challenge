import React from 'react';
import { Header, Nav } from './styles';
import logo from './assets/logo.png';

function Navbar(){
  return (
  <Header>
    <Nav className="container">
      <img src={logo} alt="Demo Store" />
    </Nav>
  </Header>
  )
}

export default Navbar
