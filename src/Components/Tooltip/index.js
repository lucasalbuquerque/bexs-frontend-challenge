import React from 'react';
import { Main } from './styles';
import iconTooltip from './Assets/tooltip.png';

function Tooltip({ text}){
  return (
    <Main>
    <img src={iconTooltip} /><span class="tooltiptext">{text}</span>
    </Main>
  )
}

Tooltip.defaultProps = {
  text: 'tooltip text',
}

export default Tooltip
