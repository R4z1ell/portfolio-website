import React, { useState } from 'react';
import { scroller } from 'react-scroll';

import {
  Container,
  NavBackground,
  NavButton,
  NavIcon,
  Nav,
  NavList,
  NavItem,
  NavLink,
  NavInput
} from './style';

const Navigation = () => {
  const [checkedStatus, setCheckedStatus] = useState(false);

  const handleCheckbox = event => {
    setCheckedStatus(event.target.checked);
  };

  const scrollToElement = element => {
    setCheckedStatus(!checkedStatus);
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 500,
      smooth: true
    });
  };

  return (
    <Container>
      <NavInput
        type="checkbox"
        id="navi-toggle"
        onChange={handleCheckbox}
        checked={checkedStatus}
      />
      <NavButton htmlFor="navi-toggle">
        <NavIcon>&nbsp;</NavIcon>
      </NavButton>
      <NavBackground>&nbsp;</NavBackground>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink onClick={() => scrollToElement('Home')}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToElement('About')}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToElement('Projects')}>
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToElement('Contact')}>
              Contact
            </NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </Container>
  );
};

export default Navigation;
