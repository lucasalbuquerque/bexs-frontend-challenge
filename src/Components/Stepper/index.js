import React, { useState, useCallback, useEffect } from 'react';
import { Main, Nav, Component } from './styles';
import Check from './assets/check.png';
import iconLeft from '../../Assets/left.png';
import iconRight from '../../Assets/right.png';
import PropTypes from 'prop-types';

function Stepper({ steps }){
  const [items, setItems] = useState(steps);
  const [activeItem, setActiveItem] = useState(0);

  const handleActive = useCallback(id => {
    setItems(
      items.map(cur => cur.id === id ? { ...cur, current: true } : { ...cur, current: false }))
  }, [items, setItems])

  const handleActiveItem = useCallback((index) => {
    if(index){
      setActiveItem(index);
    }
  }, [activeItem, setActiveItem, items, setItems])

  const handleNext = useCallback(() => {
    const item = activeItem + 1;
    handleActive(item);
  }, [activeItem])

  const handlePrev = useCallback(() => {
    const item = activeItem - 1;
    handleActive(item);
  }, [activeItem])

  useEffect(() => {
    const index = items.findIndex(step => step.current) + 1;
    handleActiveItem(index);
  }, [items, setItems])

  return (
    <>
    <Nav data-testid="stepperNav" className="desktop">
    {items && items.map((item,i) => {
    i++

    return (
      <li key={i} onClick={() => handleActive(item.id)} data-id={i} className={i < activeItem ? 'link' : undefined}>
      <div className="check">{i < activeItem ? (<img src={Check} />) : i}</div> {item.name}
      </li>
    )
    })}
    </Nav>

    <Nav className="mobile">
    {activeItem > 1 && <div className="control" onClick={handlePrev}><img src={iconLeft} width="12" /></div>}
    <a href="#"><strong>Etapa {activeItem}</strong> de {items.length}</a>
    {activeItem < items.length && <div className="control" onClick={handleNext}><img src={iconRight} width="12" /></div>}
    </Nav>
    <Main>
    <Component>
      {items && items.find(step => step.current).component}
    </Component>
    </Main>
    </>
  )

}

Stepper.propTypes = {
  steps: PropTypes.array.isRequired
}

export default Stepper
