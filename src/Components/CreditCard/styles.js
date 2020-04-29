import styled from 'styled-components';

export const Main = styled.div`

  .card {
    transition: transform 0.8s;
    perspective: 1000px;
    width: 365px;
    height: 224px;
  }

  .card-flip {
    transform: rotateY(180deg);
    transform-style: preserve-3d;
    transition: transform 0.8s;
  }

  .cardFront, .cardBack {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .cardBack {
    transform: rotateY(180deg);
  }

  /*svg classes*/
  .a,
  .g {
    fill: none;
  }

  .b {
    fill: #fff;
  }

  .c {
    fill: url(#c);
  }

  .d {
    clip-path: url(#d);
  }

  .e {
    opacity: 0.2;
  }

  .f {
    clip-path: url(#e);
  }

  .g {
    stroke: #d9d9d9;
    stroke-linecap: round;
    stroke-width: 0.6px;
  }

  .h {
    filter: url(#a);
  }

  .aback {
      fill: url(#aback);
  }

  .bback{
      fill: #1c1c1c;
  }

  .cback{
      fill: #fff;
  }

  .dback{
      opacity: 0.9;
  }

  .hback {
    filter: url(#aback);
  }
  /*end svg classes*/
`;

export const Fields = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  text-indent: 20px;

  .company {
    margin-bottom: 42px;
  }

  .cardnumber p {
    font-family: SF Pro Text;
    font-size: 22px;
    letter-spacing: 2.31px;
    color: #FFFFFF;
    text-shadow: 0px 1px 2px #000000B3;
    font-family: 'SF Pro Text Regular';
  }

  .date {
    padding-right: 20px;
  }

  .extrafields {
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .extrafields * {
    font-family: 'SF Pro Text Regular';
    font-size: 16px;
    letter-spacing: 0px;
    color: #FFFFFF;
    text-shadow: 0px 1px 2px #000000B3;
    opacity: 1;
  }

  .cvv {
    width: 100%;
    margin-top: 18px;
    text-align: center;
    text-indent: 30px;
  }

  .cvv p {
    font-size: 18px;
    letter-spacing: 5px;
    color: #3C3C3C;
    font-family: 'SF Pro Text Regular';
  }
`;
