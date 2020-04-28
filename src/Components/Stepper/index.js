import React, { useState, useCallback } from 'react';
import { Main, Nav, Component } from './styles';
import Check from './assets/check.png';

function Stepper({ steps }){
  const [items, setItems] = useState(steps);

  const handleActive = useCallback(name => {
    setItems(
      items.map(cur => cur.name === name ? { ...cur, status: true } : { ...cur, status: false }))
  }, [items, setItems])

  return (
    <>
    <Nav data-testid="stepperNav">
    {items && items.map((item,i) => {
    return (
      <li key={i} onClick={() => handleActive(item.name)} data-id={i} className={item.status ? 'link' : undefined}>
      <div className="check">{item.status ? (<img src={Check} />) : parseInt(i) + 1}</div> {item.name}
      </li>
    )
    })}
    </Nav>
    <Main>
    {items && items.map((item, i) => {
    return (
      <>
      {item.status &&
        <Component key={i}>
          {item.component}
        </Component>
      }
      </>
    )
    })}
    </Main>
    </>
  )

}

export default Stepper
