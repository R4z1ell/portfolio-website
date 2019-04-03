import React, { useEffect } from 'react';
import { scroller } from 'react-scroll';
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
    window.addEventListener('resize', start);
    setTimeout(() => {
      start();
    }, 200);
  }, []);

  const scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      smooth: true
    });
  };

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
            <BtnProject onClick={() => scrollToElement('Projects')}>
              My Projects
            </BtnProject>
            <Button onClick={() => scrollToElement('Contact')}>
              Contact me
            </Button>
          </Wrapper>
        </Flex>
      </SectionHome>
    </React.Fragment>
  );
};

export default Home;
