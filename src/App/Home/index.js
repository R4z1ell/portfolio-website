import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation';

import start from '../../../utils/starfield';
import GlobalStyle from '../../shared/GlobalStyle';

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
  const [btnStyle, setBtnStyle] = useState({ zIndex: '25' });

  useEffect(() => {
    setTimeout(() => {
      start();
    }, 200);
  }, []);

  const checkNavStatus = status => {
    if (status === 'open') {
      setBtnStyle({
        zIndex: '1',
        opacity: '0',
        transitionDelay: '0.5s',
        transitionProperty: 'opacity'
      });
    }
    if (status === 'close') {
      setBtnStyle({
        zIndex: '25',
        opacity: '1',
        transitionDelay: '0.5s',
        transitionProperty: 'opacity'
      });
    }
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <SectionHome id="home">
        <Navigation navStatus={checkNavStatus} />
        <StyledCanvas id="canvas" />
        <Flex>
          <Text>
            Hello, I'm
            <span>Pietro</span>.
            <br />
            I'm a Full-stack Web Developer from Italy.
          </Text>
          <Wrapper>
            <BtnProject style={btnStyle}>My Projects</BtnProject>
            <Button style={btnStyle}>Contact me</Button>
          </Wrapper>
        </Flex>
      </SectionHome>
    </React.Fragment>
  );
};

export default Home;
