import React, { useState } from 'react';
import { Main, Component } from './styles';

function Stepper({ steps }){
  const [items, setItems] = useState(steps);

  return (
    <Main>
      {items && items.map((item,i) => {
        return (
          <li key={i}>
            <p>{item.name}</p>
            {item.status &&
            <Component>
              {item.component}
            </Component>
            }
          </li>
        )
      })}
    </Main>
  )

}

export default Stepper
