import React from 'react';
import { render, fireEvent, findByTestId } from '@testing-library/react';
import PaymentForm from './index'
import axiosMock from 'axios';
import { act } from "react-dom/test-utils";

describe('payment form component test', () => {
  it('should fill payment form and send data to api', async () => {

    const { getByTestId, debug } = render(<PaymentForm />);

    await act(async () => {
      fireEvent.change(getByTestId('number'), { target: { value: '4111 1111 1111 1111' } });
      fireEvent.change(getByTestId('name'), { target: { value: 'Mauro Albuquerque' } });
    });

    debug();

  })
});
