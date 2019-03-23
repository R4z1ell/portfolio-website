import React, { useState, useEffect, useRef } from 'react';
import { NavMenu, InnerContainer, CloseTrigger } from './style';

import { TimelineMax } from 'gsap';

const Navigation = props => {
  const [tlOpen] = useState(new TimelineMax({ paused: true }));
  const [tlClose] = useState(new TimelineMax({ paused: true }));

  let innerContainer = useRef(null);

  let openTrigger = useRef(null);
  let openTriggerTop = useRef(null);
  let openTriggerMiddle = useRef(null);
  let openTriggerBottom = useRef(null);

  let closeTrigger = useRef(null);
  let closeTriggerLeft = useRef(null);
  let closeTriggerRight = useRef(null);

  let menuContainer = useRef(null);
  let menu = useRef(null);
  let menuTop = useRef(null);
  let menuMiddle = useRef(null);
  let menuBottom = useRef(null);

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
            closeTrigger.current.style.zIndex = '25';
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
          backgroundColor: '#49738d',
          ease: Power4.easeInOut,
          onComplete: function() {
            closeTrigger.current.style.zIndex = '5';
            openTrigger.current.style.visibility = 'visible';
          }
        },
        'close'
      )
      .to(
        menuMiddle.current,
        0.2,
        {
          backgroundColor: '#49738d',
          ease: Power4.easeInOut
        },
        'close'
      )
      .to(
        menuBottom.current,
        0.2,
        {
          backgroundColor: '#49738d',
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
            menuTop.current.style.backgroundColor = '#49738d';
            menuMiddle.current.style.backgroundColor = '#49738d';
            menuBottom.current.style.backgroundColor = '#49738d';
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

    innerContainer.current.style.display = 'block';
    innerContainer.current.style.zIndex = '20';
  };

  const CloseNavMenuClickHandler = () => {
    if (tlClose.progress() < 1) {
      tlClose.play();
    } else {
      tlClose.restart();
    }

    setTimeout(() => {
      innerContainer.current.style.zIndex = 'auto';
    }, 500);
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
      <InnerContainer ref={innerContainer} className="inner-container">
        <span ref={menuTop} className="menu-bg top" />
        <span ref={menuMiddle} className="menu-bg middle" />
        <span ref={menuBottom} className="menu-bg bottom" />
        <div ref={menuContainer} className="menu-container">
          <ul ref={menu} className="menu">
            <li>
              <a href="#" className="text-underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="text-underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </InnerContainer>
    </React.Fragment>
  );
};

export default Navigation;
