import styled from 'styled-components';

export const Main = styled.div `
  display: flex;
`

export const Nav = styled.ul `
  display: flex;
  justify-content: space-between;
  margin-bottom: 52px;

  li {
    cursor: pointer;
    color: #DE4B4B;
    font-size: 13px;
    font-family: 'Verdana';
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .check {
    border: 2px #DE4B4B solid;
    border-radius: 20px;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    font-weight: bold;
  }

  .check img {
    width: 13px;
    transform: rotate(12deg);
  }

  .link .check {
    background: #DE4B4B;
    color: #ffffff;
  }

`;

export const Component = styled.div `
  width: 100%;

  div {
    width: 100%;
  }
`
