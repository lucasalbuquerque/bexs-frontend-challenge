import styled from 'styled-components';

export const Main = styled.div `
  margin-top: 65px;
  margin-bottom: 65px;

  @media(max-width: 600px){
    margin-top: 0px;
    margin-bottom: 0px;
  }

`;

export const Content = styled.div `
  background: #ffffff;
  display: flex;
`;

export const Left = styled.div `
  width: 264px;
  height: 596px;
  background: #DE4B4B;
  padding-left: 66px;
  padding-right: 22px;
  padding-top: 55px;


  @media(max-width: 600px){
    padding-left: 10%;
    padding-right: 10%;
    width: 80%;
    height: 184px;
    margin-bottom: 35px;
    padding-top: 100px;
  }

`;

export const Right = styled.div `
  padding-top: 55px;
  padding-left: 168px;
  padding-right: 65px;
  width: 100%;

  @media(max-width: 600px){
    padding-left: 0px;
    padding-right: 0px;
  }

`;

