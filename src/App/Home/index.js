import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation';

import start from '../../../utils/starfield';
import GlobalStyle from '../../shared/GlobalStyle';

import { StyledCanvas, Flex, Text, Wrapper, Button, BtnProject } from './style';

const Home = () => {
  const [btnZindex, setBtnZindex] = useState({ zIndex: '25' });

  useEffect(() => {
    setTimeout(() => {
      start();
    }, 200);
  }, []);

  const checkNavStatus = status => {
    if (status === 'open') {
      setBtnZindex({
        zIndex: '1',
        opacity: '0',
        transitionDelay: '0.5s',
        transitionProperty: 'opacity'
      });
    }
    if (status === 'close') {
      setBtnZindex({
        zIndex: '25',
        opacity: '1',
        transitionDelay: '0.5s',
        transitionProperty: 'opacity'
      });
    }
  };

  return (
    <section id="home">
      <GlobalStyle />
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
          <BtnProject style={btnZindex}>My Projects</BtnProject>
          <Button style={btnZindex}>Contact me</Button>
        </Wrapper>
      </Flex>
    </section>
  );
};

export default Home;
