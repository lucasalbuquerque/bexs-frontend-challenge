import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #F7F7F7;
  }

  * {
    margin: 0;
    padding: 0;
  }

  .container {
    width: 1024px;
    margin: 0 auto;
  }
`;

export default GlobalStyle
