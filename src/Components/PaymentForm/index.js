import React, { useEffect, useContext, useCallback } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import MaskedInput from 'react-maskedinput';
import { Form, Group, FieldGroup, Select, Submit } from './styles';
import axios from 'axios';
import * as api from '../../Services/api/index';
import CreditCardContext from '../../State/CreditCard/context'
import * as CreditCardActions from '../../State/CreditCard/actions';
import iconTooltip from './Assets/tooltip.png';

function PaymentForm(){
  const { setCreditCard } = useContext(CreditCardContext);

  const formik = useFormik({
    initialValues: {
      number: undefined,
      name: '',
      expiry: undefined,
      cvv: undefined,
      installments: undefined
    },
    validationSchema: yup.object({
      number: yup.string().required('Campo obrigatório!'),
      name: yup.string().required('Campo obrigatório!').min(8, 'Insira seu nome completo'),
      expiry: yup.string().required('Campo obrigatório!'),
      cvv: yup.string().required('Campo obrigatório!'),
      installments: yup.string().matches(/^[0-9]/, 'Campo obrigatório').required('Campo obrigatório!')
    }),
    onSubmit: async () => {
      const data = api.user(formik.values);
      try {
        const post = await axios.post(api.DOMAIN, data);
        console.table(post.data);
        return
      }
      catch(err) {
        console.error(err);
        return err
      }
    }
  })

  const handleFlip = useCallback((v) => {
    const value = { ...formik.values, flip: v };
    setCreditCard(CreditCardActions.send(value));
    return
  }, [formik.values, formik])

  useEffect(() => {
    if(formik.values){
      const value = { ...formik.values };
      setCreditCard(CreditCardActions.send(value));
    }
  }, [formik.values]);

  useEffect(() => {
    const value = { ...formik.values, flip: formik.values.cvv ? true : false };
    setCreditCard(CreditCardActions.send(value));
  }, [formik.values.cvv]);

  return (
  <Form onSubmit={formik.handleSubmit} noValidate>

    <Group>
    <MaskedInput mask="1111 1111 1111 1111" placeholderChar=" " {...formik.getFieldProps("number")} autoComplete="Off" required
    className={formik.errors.number && formik.touched.number ? 'error' : ''}
    data-testid="number"
    onClick={() => handleFlip(false)}
    />
    <span className="bar"></span>
    <label id="number">Número do cartão</label>
    {formik.touched.number ? (<small>{formik.errors.number}</small>) : null}
    </Group>

    <Group>
    <input maxLength="24" {...formik.getFieldProps("name")} autoComplete="Off" required
    className={formik.errors.name && formik.touched.name ? 'error' : ''}
    data-testid="name"
    onClick={() => handleFlip(false)}
    />
    <span className="bar"></span>
    <label id="name">Nome (igual ao cartão)</label>
    {formik.touched.name ? (<small>{formik.errors.name}</small>) : null}
    </Group>

    <FieldGroup>
    <Group>
    <MaskedInput mask="11/11" placeholder="" placeholderChar=" " {...formik.getFieldProps("expiry")} autoComplete="Off" required
    className={formik.errors.expiry && formik.touched.expiry ? 'error' : ''}
    data-testid="expiry"
    onClick={() => handleFlip(false)}
    />
    <span className="bar"></span>
    <label id="expiry">Validade</label>
    {formik.touched.expiry ? (<small>{formik.errors.expiry}</small>) : null}
    </Group>

    <Group>
    <MaskedInput mask="111" placeholderChar=" " {...formik.getFieldProps("cvv")} autoComplete="Off" required
    className={formik.errors.cvv && formik.touched.cvv ? 'error' : ''}
    data-testid="cvv"
    onClick={() => handleFlip(true)}
    />
    <span className="bar"></span>
    <label id="cvv">CVV <img src={iconTooltip} /></label>
    <span className="tooltiptext">O CVV é o código de segurança do seu cartão</span>
    {formik.touched.cvv ? (<small>{formik.errors.cvv}</small>) : null}
    </Group>
    </FieldGroup>

    <Group>
    <Select {...formik.getFieldProps("installments")} autoComplete="Off" required
    className={parseInt(formik.values.installments) ? 'selectboxActive' : ''}
    color={formik.touched.installments && formik.errors.installments ? '#EB5757' : '#C9C9C9'}
    data-testid="installments"
    onClick={() => handleFlip(false)}
    >
      <option value>Número de parcelas</option>
      <option value="1">1x de R$ 1.000,00 sem juros</option>
      <option value="2">2x de R$ 500,00 sem juros</option>
      <option value="3">3x de R$ 333,33 sem juros</option>
      <option value="4">4x de R$ 250,00 sem juros</option>
    </Select>
    {formik.touched.installments ? (<small>{formik.errors.installments}</small>) : null}
    </Group>

    <Submit>
    <input type="submit" value="continuar" data-testid="submit" />
    </Submit>

  </Form>
  )
}

export default PaymentForm
