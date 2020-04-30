import { createGlobalStyle } from 'styled-components'

import SFProTextRegularEot from './Fonts/1c45e28f8e86cc89876f003b953cc3e9.eot';
import SFProTextRegularWoff from './Fonts/1c45e28f8e86cc89876f003b953cc3e9.woff';
import SFProTextRegularWoff2 from './Fonts/1c45e28f8e86cc89876f003b953cc3e9.woff2';
import SFProTextRegularTtf from './Fonts/1c45e28f8e86cc89876f003b953cc3e9.ttf';

const GlobalStyle = createGlobalStyle`
  body {
    background: #F7F7F7;
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    --webkit-appearance: none;
  }

  .desktop {
    display: flex;
  }

  .mobile {
    display: none;
  }

  .container {
    width: 1024px;
    margin: 0 auto;
  }

  @font-face {
    font-family: 'SF Pro Text Regular';
    src: url(${SFProTextRegularEot}); /* IE9*/
    src: url(${SFProTextRegularEot}?#iefix) format("embedded-opentype"), /* IE6-IE8 */
    url(${SFProTextRegularWoff2}) format("woff2"), /* chrome、firefox */
    url(${SFProTextRegularWoff}) format("woff"), /* chrome、firefox */
    url(${SFProTextRegularTtf}) format("truetype");
  }

  @media(max-width: 600px){
    body {
      background: #FFFFFF;
    }

    .container {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .desktop {
      display: none;
    }

    .mobile {
      display: flex;
    }
  }

`;

export default GlobalStyle
