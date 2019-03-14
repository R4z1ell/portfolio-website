import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import start from '../utils/starfield';

const GlobalStyle = createGlobalStyle`
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
    line-height: 2;
  }

  a {
    text-decoration: none;
  }
`;

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      start();
    }, 200);
  }, []);

  return (
    <React.Fragment>
      <GlobalStyle />
      <canvas id="canvas" width="100vw" height="100vh" />
    </React.Fragment>
  );
};

export default Home;
