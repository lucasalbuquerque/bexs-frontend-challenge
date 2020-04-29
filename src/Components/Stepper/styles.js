import styled from 'styled-components';

export const Main = styled.div `
  display: flex;
`

export const Nav = styled.ul `
  display: flex;
  justify-content: flex-end;
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

  li::after {
    content: url(right.png);
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 2px;
  }

  li:last-child::after {
    content: none;
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

  .control {
    cursor: pointer;
  }

  @media(max-width:600px){
    width: 95%;
    position: absolute;
    top: 45px;
    left: 0px;
    right: 0px;
    margin-left: auto;
    margin-right: auto;

    a {
      color: #ffffff;
      text-decoration: none;
      font-size: 13px;
      font-family: 'Verdana';
      width: 100%;
      text-align: center;
    }
  }
`;

export const Component = styled.div `
  width: 100%;

  div {
    width: 100%;
  }
`
