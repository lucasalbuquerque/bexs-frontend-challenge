import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import Checkout from './Pages/Checkout'

test('full app rendering/navigating', () => {
  const history = createMemoryHistory()
  const { container, debug } = render(
    <Router history={history}>
      <Checkout />
    </Router>
  )
  expect(container.innerHTML).toMatch('Adicione um novo cartão de crédito')
});
