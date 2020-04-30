import styled from 'styled-components';

export const Form = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  input[type=submit]{
    border: none;
    border-radius: 10px;
    background: #DE4B4B 0% 0% no-repeat padding-box;
    width: 246px;
    height: 51px;
    font-family: 'SF Pro Text Regular';
  }

  @media(max-width:600px){
    width: auto;
    padding-left: 45px;
    padding-right: 45px;

    input[type=submit] {
      width: 100%;
    }
  }


`;

export const Group = styled.div `
  position: relative;
  width: 100%;
  margin-bottom: 56px;
  display: inline-block;

  .tooltiptext {
    visibility: hidden;
    background-color: #DE4B4B;
    border-radius: 4px;
    position: absolute;
    z-index: 1;
    padding: 5px;
    margin-top : 2px;
    opacity: 0;
    transition: opacity 0.5s;
    font-family: 'SF Pro Text Regular';
    font-size: 12px;
    color: #ffffff;
  }

  :hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }

  input, select {
    font-family: 'Verdana';
    font-size: 17px;
    padding: 10px 0px 10px 0px;
    display: block;
    width: 100%;
    color: #3C3C3C;
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
  }

  input {
    border-bottom: 2px solid #C9C9C9;
  }

  select {
    background-image:url(down.png);
    background-position: right center;
    background-repeat: no-repeat;
    color: #C9C9C9;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  select::-ms-expand {
      display: none;
  }

  .selectboxActive {
    color: #3C3C3C;
  }

  select option {
    color: #C9C9C9;
  }

  input:focus ~ label, input:valid ~ label {
    top: -10px;
    font-size: 13px;
    color: #C9C9C9;
  }

  label {
    color: #C9C9C9;
    font-size: 17px;
    font-family: Verdana;
    position: absolute;
    pointer-events: none;
    left: 0px;
    top:  10px;
    transition: 0.2s ease all;
    -moz-transition:  0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .bar 	{
    position:relative;
    display:block;
    width: 100%;
  }

  .bar:before, .bar:after 	{
    content:'';
    height: 1px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #C9C9C9;
    transition:0.2s ease all;
    -moz-transition:0.2s ease all;
    -webkit-transition:0.2s ease all;
  }

  .bar:before {
    left:50%;
  }

  .bar:after {
    right:50%;
  }

  small {
    color: #EB5757;
    font-family: Verdana;
    font-size: 13px;
    position: absolute;
    margin-top: 5px;
  }

  .error {
    border-color: #EB5757;
  }

  @media(max-width: 600px){
    margin-bottom: 33px;
  }

`;

export const Select = styled.select `
  border-bottom: 2px solid;
  border-bottom-color: ${props => props.color};
`;

export const FieldGroup = styled.div `
  display: flex;
  justify-content: space-between;

  div:first-child {
    padding-right: 15px;
  }
`;

export const Submit = styled.div `
  display: flex;
  justify-content: flex-end;

  input {
    color: #FFFFFF;
    font-family: 'Verdana';
    text-transform: uppercase;
    font-size: 17px;
    font-weight: 500;
  }
`;
