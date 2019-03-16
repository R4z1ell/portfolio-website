import React, { useEffect, useState, useRef } from 'react';
import start from '../../../utils/starfield';
import GlobalStyle from '../../shared/GlobalStyle';
import {
  StyledCanvas,
  Flex,
  Text,
  Wrapper,
  Button,
  BtnProject,
  NavMenu,
  InnerContainer,
  CloseTrigger
} from './style';

import { TimelineMax } from 'gsap';
import anime from 'animejs';

const Home = () => {
  const [tlOpen, setTlOpen] = useState(new TimelineMax({ paused: true }));

  //OPEN TRIGGER
  var openTrigger = useRef(null);
  var openTriggerTop = useRef(null);
  var openTriggerMiddle = useRef(null);
  var openTriggerBottom = useRef(null);

  //CLOSE TRIGGER
  var closeTrigger = useRef(null);
  var closeTriggerLeft = useRef(null);
  var closeTriggerRight = useRef(null);

  //MENU
  var menuContainer = useRef(null);
  var menu = useRef(null);
  var menuTop = useRef(null);
  var menuMiddle = useRef(null);
  var menuBottom = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      start();
    }, 200);
  }, []);

  useEffect(() => {
    tlOpen
      .add('preOpen')
      .to(
        openTriggerTop.current,
        0.4,
        {
          x: '+80px',
          y: '-80px',
          delay: 0.1,
          ease: Power4.easeIn,
          onComplete: function() {
            anime({
              targets: openTriggerTop.current,
              zIndex: '25'
            });
          }
        },
        'preOpen'
      )
      .to(
        openTriggerMiddle.current,
        0.4,
        {
          x: '+=80px',
          y: '-=80px',
          ease: Power4.easeIn,
          onComplete: function() {
            anime({
              targets: openTrigger.current,
              visibility: 'hidden'
            });
          }
        },
        'preOpen'
      )
      .to(
        openTriggerBottom.current,
        0.4,
        {
          x: '+=80px',
          y: '-=80px',
          delay: 0.2,
          ease: Power4.easeIn
        },
        'preOpen'
      )
      .add('open', '-=0.4')
      .to(
        menuTop.current,
        0.8,
        {
          y: '53%',
          ease: Power4.easeInOut
        },
        'open'
      )
      .to(
        menuMiddle.current,
        0.8,
        {
          scaleY: 1,
          ease: Power4.easeInOut
        },
        'open'
      )
      .to(
        menuBottom.current,
        0.8,
        {
          y: '-131%',
          ease: Power4.easeInOut
        },
        'open'
      )
      .fromTo(
        menu.current,
        0.6,
        {
          y: 30,
          opacity: 0,
          visibility: 'hidden'
        },
        {
          y: 0,
          opacity: 1,
          visibility: 'visible',
          ease: Power4.easeOut
        },
        '-=0.2'
      )
      .add('preClose', '-=0.8')
      .to(
        closeTriggerLeft.current,
        0.8,
        {
          x: '-=100px',
          y: '+=100px',
          ease: Power4.easeOut
        },
        'preClose'
      )
      .to(
        closeTriggerRight.current,
        0.8,
        {
          x: '+=100px',
          y: '+=100px',
          delay: 0.2,
          ease: Power4.easeOut
        },
        'preClose'
      );
  }, []);

  const NavMenuClickHandler = () => {
    if (tlOpen.progress() < 1) {
      tlOpen.play();
    } else {
      tlOpen.restart();
    }
  };

  return (
    <section id="home">
      <GlobalStyle />

      <NavMenu
        ref={openTrigger}
        className="menu-trigger"
        onClick={NavMenuClickHandler}
      >
        <span ref={openTriggerTop} className="menu-trigger-bar top" />
        <span ref={openTriggerMiddle} className="menu-trigger-bar middle" />
        <span ref={openTriggerBottom} className="menu-trigger-bar bottom" />
      </NavMenu>
      <CloseTrigger ref={closeTrigger} className="close-trigger">
        <span ref={closeTriggerLeft} className="close-trigger-bar left" />
        <span ref={closeTriggerRight} className="close-trigger-bar right" />
      </CloseTrigger>
      <InnerContainer className="inner-container">
        <span ref={menuTop} className="menu-bg top" />
        <span ref={menuMiddle} className="menu-bg middle" />
        <span ref={menuBottom} className="menu-bg bottom" />
        <div ref={menuContainer} className="menu-container">
          <ul ref={menu} className="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </InnerContainer>
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
    </section>
  );
};

export default Home;
