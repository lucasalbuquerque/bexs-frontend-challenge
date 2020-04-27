import React from 'react';
import history from './services/history'
import { HashRouter, BrowserRouter, Route } from 'react-router-dom';
import Checkout from './Pages/Checkout'

function App() {
  return (
    <BrowserRouter history={history}>
       <Route path="/" component={Checkout} exact={true}></Route>
    </BrowserRouter>
  );
}

export default App;