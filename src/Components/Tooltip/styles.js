import styled from 'styled-components';

export const Main = styled.div `
  margin-top: 12px;
  position: absolute;
  text-align: center;
  justify-content: center;
  font-family: 'SF Pro Text Regular';

  :hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }

  .tooltiptext {
    visibility: hidden;
    background-color: #DE4B4B;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    opacity: 0;
    transition: opacity 0.3s;
    font-size: 11px;
    padding: 10px;
    visibility: visible;
    opacity: 1;
  }

  .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #DE4B4B transparent transparent transparent;
  }

`;
