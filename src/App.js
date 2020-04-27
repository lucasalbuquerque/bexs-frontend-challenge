import React from 'react';
import history from './Services/history'
import { BrowserRouter, Route } from 'react-router-dom';
import Checkout from './Pages/Checkout'
import Navbar from './Components/Navbar'

function App() {
  return (
    <BrowserRouter history={history}>
      <Navbar />
       <Route path="/" component={Checkout} exact={true}></Route>
    </BrowserRouter>
  );
}

export default App;