import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Inconsolata:700|Ubuntu:400,700|Varela+Round');

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    font-size: 1.6rem;
    font-family: 'Varela Round';
    line-height: 2;
    width: 100%;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
