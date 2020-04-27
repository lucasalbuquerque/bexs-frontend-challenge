import React, { useState, useCallback } from 'react';
import { Main, Nav, Component } from './styles';

function Stepper({ steps }){
  const [items, setItems] = useState(steps);

  const handleActive = useCallback(name => {
    setItems(
      items.map(cur => cur.name === name ? { ...cur, status: true } : { ...cur, status: false }))
  }, [items, setItems])

  return (
    <>
    <Nav>
    {items && items.map((item,i) => {
    return (
      <li key={i} onClick={() => handleActive(item.name)} data-id={i} className={item.status ? 'link' : undefined}>{item.name}</li>
    )
    })}
    </Nav>
    <Main>
    {items && items.map((item,i) => {
    return (
      <>
      {item.status &&
        <Component>
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
