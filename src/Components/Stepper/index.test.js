import React from 'react';
import { render } from '@testing-library/react';
import Stepper from './index';
import PaymentForm from '../PaymentForm';

describe('Stepper component', () => {
  it('stepper should be have 3 items', async () => {

  const stepOptions = [
    { name: 'Carrinho', component: <PaymentForm />, status: true },
    { name: 'Pagamento', component: <PaymentForm />, status: false },
    { name: 'Confirmação', component: <PaymentForm />, status: false }
  ]

  const { findByTestId } = render(<Stepper steps={stepOptions} />);

  const nav = await findByTestId('stepperNav');

  expect(nav).toHaveTextContent(stepOptions[0].name);
  expect(nav).toHaveTextContent(stepOptions[1].name);
  expect(nav).toHaveTextContent(stepOptions[2].name);
  })

})
