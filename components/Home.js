import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import start from '../utils/starfield';

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
  }

  a {
    text-decoration: none;
  }
`;

const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Text = styled.div`
  font-size: 4.6rem;
  line-height: 5.4rem;
  text-align: center;
  pointer-events: none;
  margin-bottom: 15px;
  color: #fff;
  z-index: 1;

  span {
    color: #fc3565;
    margin-left: 10px;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  background: ${props => (props.primary ? '#fc3565' : 'transparent')};
  padding: 18px 40px;
  margin-right: 20px;
  font-family: inherit;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  border: ${props => (props.primary ? 'none' : '1px solid #fff')};
  z-index: 1;
`;

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      start();
    }, 0);
  }, []);

  return (
    <React.Fragment>
      <GlobalStyle />
      <StyledCanvas id="canvas" />
      <Flex>
        <Text>
          Hello, I'm
          <span>Pietro</span>.
          <br />
          I'm a Full-stack Web Developer from Italy.
        </Text>
        <Wrapper>
          <Button primary>My Projects</Button>
          <Button>Contact me</Button>
        </Wrapper>
      </Flex>
    </React.Fragment>
  );
};

export default Home;
