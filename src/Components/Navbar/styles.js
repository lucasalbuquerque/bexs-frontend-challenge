import styled from 'styled-components';

export const Header = styled.header `
  background: #ffffff;
  border-top: 1px #e6e6e6 solid;
  border-bottom: 1px #b3b3b3 solid;
  padding-top: 24px;
  padding-bottom: 24px;

  img {
    height: 42px;
  }

  @media(max-width:600px){
    display: none;
  }

`;

export const Nav = styled.nav `

`;
