import React from 'react';
import history from './Services/history'
import { BrowserRouter, Route } from 'react-router-dom';
import Checkout from './Pages/Checkout'

function App() {
  return (
    <BrowserRouter history={history}>
       <Route path="/" component={Checkout} exact={true}></Route>
    </BrowserRouter>
  );
}

export default App;