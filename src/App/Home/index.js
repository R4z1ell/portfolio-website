import React, { useEffect } from 'react';
import start from '../../../utils/starfield';

import GlobalStyle from '../../shared/GlobalStyle';
import Navigation from '../Navigation';

import {
  SectionHome,
  StyledCanvas,
  Flex,
  Text,
  Wrapper,
  Button,
  BtnProject
} from './style';

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      start();
    }, 200);
  }, []);

  return (
    <React.Fragment>
      <GlobalStyle />
      <SectionHome id="home">
        <Navigation />
        <StyledCanvas id="canvas" />
        <Flex>
          <Text>
            Hello, I'm
            <span>Pietro</span>.
            <br />
            I'm a Full-stack Web Developer from Italy.
          </Text>
          <Wrapper>
            <BtnProject>My Projects</BtnProject>
            <Button>Contact me</Button>
          </Wrapper>
        </Flex>
      </SectionHome>
    </React.Fragment>
  );
};

export default Home;
