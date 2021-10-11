import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    // font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-family: 'Arimo', sans-serif !important;
  }

  body.fontLoaded {
    // font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label,
  h1 {
    // font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
    color: #ffffff;
  }

  // to hide scrollbar
  *{
    -ms-overflow-style: none;
   }
   ::-webkit-scrollbar {
       display: none;
   }

  `;

export default GlobalStyle;
