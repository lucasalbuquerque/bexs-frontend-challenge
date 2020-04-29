import React from 'react';
import CreditCardContext from './State/CreditCard/provider';
import history from './Services/history'
import { BrowserRouter, Route } from 'react-router-dom';
import Checkout from './Pages/Checkout';
import Navbar from './Components/Navbar';
import GlobalStyle from './styles';

function App() {
  return (
    <CreditCardContext>
    <BrowserRouter history={history}>
      <GlobalStyle />
      <Navbar />
       <Route path="/" component={Checkout} exact={true}></Route>
    </BrowserRouter>
    </CreditCardContext>
  );
}

export default App;
