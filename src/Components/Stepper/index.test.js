import React from 'react';
import { render } from '@testing-library/react';
import Stepper from './index';
import PaymentForm from '../PaymentForm';

describe('stepper component', () => {
  it('stepper should be have 3 items', async () => {

  const stepOptions = [
    { id: 1, name: 'Carrinho', component: <PaymentForm />, current: false },
    { id: 2, name: 'Pagamento', component: <PaymentForm />, current: true },
    { id: 3, name: 'Confirmação', component: <PaymentForm />, current: false }
  ]

  const { findByTestId } = render(<Stepper steps={stepOptions} />);

  const nav = await findByTestId('stepperNav');

  expect(nav).toHaveTextContent(stepOptions[0].name);
  expect(nav).toHaveTextContent(stepOptions[1].name);
  expect(nav).toHaveTextContent(stepOptions[2].name);
  })
})
