import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import MaskedInput from 'react-maskedinput';
import { Form } from './styles';

function PaymentForm(){

  const formik = useFormik({
    initialValues: {
      number: undefined,
      name: undefined,
      expiry: undefined,
      cvv: undefined,
      installments: undefined
    },
    validationSchema: yup.object({
      number: yup.string().required('Campo obrigatório!'),
      name: yup.string().required('Campo obrigatório!'),
      expiry: yup.string().required('Campo obrigatório!'),
      cvv: yup.string().required('Campo obrigatório!'),
      installments: yup.string().required('Campo obrigatório!')
    }),
    onSubmit: (values) => {
      console.log('clicked', formik.values)
    }
  })

  return(
  <Form onSubmit={formik.handleSubmit}>
    <label id="number">Número</label>
    <MaskedInput mask="1111 1111 1111 1111" placeholderChar=" " type="text" name="number" {...formik.getFieldProps("number")} />

    {formik.touched.number ? (<small>{formik.errors.number}</small>) : null}

    <label id="name">Nome (igual ao cartão)</label>
    <input type="text" name="name" maxLength="30" {...formik.getFieldProps("name")} />

    <label id="expiry">Validade</label>
    <MaskedInput mask="11/11" placeholderChar=" " placeholder="00/00" type="text" name="expiry" {...formik.getFieldProps("expiry")} />

    <label id="cvv">CVV</label>
    <MaskedInput mask="111" placeholderChar=" " type="text" name="cvv" {...formik.getFieldProps("cvv")} autoComplete="Off" />

    <label id="installments">Número de parcelas</label>
    <select {...formik.getFieldProps("installments")}>
      <option>1x</option>
      <option>2x</option>
      <option>3x</option>
    </select>

    <input type="submit" value="enviar" />
  </Form>
  )
}

export default PaymentForm
