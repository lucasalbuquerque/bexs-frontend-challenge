import * as flag from './types';
const visaRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
const mastercardRegex = /^(?:5[1-5][0-9]{14})$/;
const amexRegex = /^(?:3[47][0-9]{13})$/;
const discoverRegex = /^6(?:011|5\d\d)(| |-)(?:\d{4}\1){2}\d{4}$/;

const foundCreditCardFlag = (value) => {
  if(!value)
  return
  const formattedValue = value.replace(/[^0-9]/g, '');
  if (visaRegex.test(formattedValue)) {
    return flag.visa;
  } else if(mastercardRegex.test(formattedValue)) {
    return flag.master;
  } else if(amexRegex.test(formattedValue)) {
    return flag.amex;
  } else if(discoverRegex.test(formattedValue)) {
    return flag.discover;
  }
  return flag.def;
}

export default foundCreditCardFlag
