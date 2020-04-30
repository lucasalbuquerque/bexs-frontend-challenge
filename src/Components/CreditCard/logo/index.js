import React from 'react';
import visa from './assets/visa.png';
import master from './assets/master.png';
import amex from './assets/amex.png';
import * as flag from '../utils/types';

function Logo({ type }){
  const types = [
    { type: flag.visa, image: visa },
    { type: flag.master, image: master },
    { type: flag.amex, image: amex }
  ]

  const handleFilter = () => {
    const found = types.find(img => img.type == type);
    if(found){
      return found.image
    }
  }

  if(type && type !== flag.def && handleFilter()){
    return <img src={handleFilter()} width="70" />
  }

  return <></>
}

export default Logo
