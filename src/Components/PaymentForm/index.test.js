import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import PaymentForm from './index'
import axiosMock from 'axios';
import * as api from '../../Services/api';

import { act } from "react-dom/test-utils";

describe('payment form component test', () => {
  it('should fill payment form and send data to api', async () => {

    const { getByTestId, debug } = render(<PaymentForm />);

    const fields = api.sendData('4111 1111 1111 1111', 'Mauro Albuquerque', '12/24', '123', '2')

    //filling fields at form
    await act(async () => {
      fireEvent.change(getByTestId('number'), { target: { value: fields.number } });
      fireEvent.change(getByTestId('name'), { target: { value: fields.name } });
      fireEvent.change(getByTestId('expiry'), { target: { value: fields.expiry } });
      fireEvent.change(getByTestId('cvv'), { target: { value: fields.cvv } });
      fireEvent.change(getByTestId('installments'), { target: { value: fields.installments } });
      fireEvent.click(getByTestId('submit'));
    });

    //get values from inputs
    const inputNumber = getByTestId('number').getAttribute('value');
    const inputName = getByTestId('name').getAttribute('value');
    const inputExpiry = getByTestId('expiry').getAttribute('value');
    const inputCvv = getByTestId('cvv').getAttribute('value');
    const inputInstallments = getByTestId('installments').getAttribute('value');

    const fieldsToSend = api.sendData(inputNumber, inputName, inputExpiry, inputCvv, inputInstallments);

    //send to api
    const post = await axiosMock.post(api.DOMAIN, fieldsToSend);

    //if request made with success, i'll receive a id
    expect(post.data.id).toBeDefined();

  })
});
