import React, { useState, useCallback, useEffect } from 'react';
import { Main, Nav, Component } from './styles';
import Check from './assets/check.png';

function Stepper({ steps }){
  const [items, setItems] = useState(steps);
  const [activeItem, setActiveItem] = useState(0);

  const handleActive = useCallback(name => {
    setItems(
      items.map(cur => cur.name === name ? { ...cur, current: true } : { ...cur, current: false }))
  }, [items, setItems])

  const handleActiveItem = useCallback((index) => {
    if(index){
      setActiveItem(index);
    }
  }, [activeItem, setActiveItem, items, setItems])

  useEffect(() => {
    console.log('items', items);
    const index = items.findIndex(step => step.current) + 1;
    console.log('index', index);
    handleActiveItem(index);
  }, [items, setItems])

  return (
    <>
    <Nav data-testid="stepperNav">
    {items && items.map((item,i) => {
    i++

    return (
      <li key={i} onClick={() => handleActive(item.name)} data-id={i} className={i < activeItem ? 'link' : undefined}>
      <div className="check">{i < activeItem ? (<img src={Check} />) : i}</div> {item.name}
      </li>
    )
    })}
    </Nav>
    <Main>
    <Component>
      {items && items.find(step => step.current).component}
    </Component>
    </Main>
    </>
  )

}

export default Stepper
