import styled from 'styled-components';

export const Navigation = styled.div `
  display: flex;
  align-items: center;
  margin-bottom: 78px;

  img {
    height: 14px;
    margin-right: 16px;
  }

  h2 {
    font-size: 13px;
    color: #FFFFFF;
    font-weight: 200;
    font-family: Verdana;
  }

  @media(max-width: 600px){
    display: none;
  }
`;

export const Area = styled.div `
  display: flex;
  width: 265px;
  margin: 0 auto;
  margin-bottom: 16px;


  h3 {
    text-align: left;
    font: Bold 19.5px Verdana;
    letter-spacing: -0.01px;
    color: #FFFFFF;
    margin-left: 15px;
  }

  @media(max-width: 600px){
    width: 220px;
    margin: 0 auto;
    margin-bottom: 20px;

    img {
      height: 40px;
    }

    h3 {
      font-size: 16px;
    }
  }
`;
