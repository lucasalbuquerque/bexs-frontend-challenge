const API_URL = 'https://api.jsonplaceholder.typicode.com/users';
const API_URL_QA = 'https://jsonplaceholder.typicode.com/users';

export const DOMAIN = process.env.NODE_ENV === 'production' ? API_URL : API_URL_QA;

export const sendData = (number, name, expiry, cvv, installments) => {
  return {
    number,
    name,
    expiry,
    cvv,
    installments,
  };
}

export const user = (name) => {
    return {
      name
    }
};
