import React, { useState, useEffect, useRef } from 'react';
import { NavMenu, InnerContainer, CloseTrigger } from './style';

import { TimelineMax } from 'gsap';
import anime from 'animejs';

const Navigation = props => {
  const [tlOpen] = useState(new TimelineMax({ paused: true }));
  const [tlClose] = useState(new TimelineMax({ paused: true }));

  var openTrigger = useRef(null);
  var openTriggerTop = useRef(null);
  var openTriggerMiddle = useRef(null);
  var openTriggerBottom = useRef(null);

  var closeTrigger = useRef(null);
  var closeTriggerLeft = useRef(null);
  var closeTriggerRight = useRef(null);

  var menuContainer = useRef(null);
  var menu = useRef(null);
  var menuTop = useRef(null);
  var menuMiddle = useRef(null);
  var menuBottom = useRef(null);

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
              targets: closeTrigger.current,
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
            openTrigger.current.style.visibility = 'hidden';
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
          y: '75%',
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
          y: '-137%',
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

  useEffect(() => {
    tlClose
      .add('close')
      .to(
        menuTop.current,
        0.2,
        {
          backgroundColor: '#04C2C9',
          ease: Power4.easeInOut,
          onComplete: function() {
            anime({
              targets: closeTrigger.current,
              zIndex: '5'
            });
            openTrigger.current.style.visibility = 'visible';
          }
        },
        'close'
      )
      .to(
        menuMiddle.current,
        0.2,
        {
          backgroundColor: '#04C2C9',
          ease: Power4.easeInOut
        },
        'close'
      )
      .to(
        menuBottom.current,
        0.2,
        {
          backgroundColor: '#04C2C9',
          ease: Power4.easeInOut
        },
        'close'
      )
      .to(
        menu.current,
        0.6,
        {
          y: 20,
          opacity: 0,
          ease: Power4.easeOut,
          onComplete: function() {
            menu.current.style.visibility = 'hidden';
          }
        },
        'close'
      )
      .to(
        menuTop.current,
        0.8,
        {
          y: '-113%',
          ease: Power4.easeInOut
        },
        'close',
        '+=0.2'
      )
      .to(
        menuMiddle.current,
        0.8,
        {
          scaleY: 0,
          ease: Power4.easeInOut
        },
        'close',
        '+=0.2'
      )
      .to(
        menuBottom.current,
        0.8,
        {
          y: '23%',
          ease: Power4.easeInOut,
          onComplete: function() {
            anime({
              targets: menuTop.current,
              backgroundColor: '#fff'
            });
            anime({
              targets: menuMiddle.current,
              backgroundColor: '#fff'
            });
            anime({
              targets: menuBottom.current,
              backgroundColor: '#fff'
            });
          }
        },
        'close',
        '+=0.2'
      )
      .to(
        closeTriggerLeft.current,
        0.2,
        {
          x: '+=100px',
          y: '-=100px',
          ease: Power4.easeIn
        },
        'close'
      )
      .to(
        closeTriggerRight.current,
        0.2,
        {
          x: '-=100px',
          y: '-=100px',
          delay: 0.1,
          ease: Power4.easeIn
        },
        'close'
      )
      .to(
        openTriggerTop.current,
        1,
        {
          x: '-=80px',
          y: '+=80px',
          delay: 0.2,
          ease: Power4.easeOut
        },
        'close'
      )
      .to(
        openTriggerMiddle.current,
        1,
        {
          x: '-=80px',
          y: '+=80px',
          ease: Power4.easeOut
        },
        'close'
      )
      .to(
        openTriggerBottom.current,
        1,
        {
          x: '-=80px',
          y: '+=80px',
          delay: 0.1,
          ease: Power4.easeOut
        },
        'close'
      );
  }, []);

  const NavMenuClickHandler = () => {
    if (tlOpen.progress() < 1) {
      tlOpen.play();
    } else {
      tlOpen.restart();
    }
    props.navStatus('open');
  };

  const CloseNavMenuClickHandler = () => {
    if (tlClose.progress() < 1) {
      tlClose.play();
    } else {
      tlClose.restart();
    }
    props.navStatus('close');
  };

  return (
    <React.Fragment>
      <NavMenu
        ref={openTrigger}
        className="menu-trigger"
        onClick={NavMenuClickHandler}
      >
        <span ref={openTriggerTop} className="menu-trigger-bar top" />
        <span ref={openTriggerMiddle} className="menu-trigger-bar middle" />
        <span ref={openTriggerBottom} className="menu-trigger-bar bottom" />
      </NavMenu>
      <CloseTrigger
        ref={closeTrigger}
        className="close-trigger"
        onClick={CloseNavMenuClickHandler}
      >
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
    </React.Fragment>
  );
};

export default Navigation;
