import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import Checkout from './Pages/Checkout'
import CreditCardContext from './State/CreditCard/provider';

test('full app rendering/navigating', async () => {
  const history = createMemoryHistory()
  const { container, debug } = await render(
    <CreditCardContext>
    <Router history={history}>
      <Checkout />
    </Router>
    </CreditCardContext>
  )
  expect(container.innerHTML).toMatch('Adicione um novo cartão de crédito')
});
