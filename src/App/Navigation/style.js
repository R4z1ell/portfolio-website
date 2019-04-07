import styled from 'styled-components';
import { device } from '../../shared/MediaQueries';

const Container = styled.div``;

const NavBackground = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  position: fixed;
  top: 50px;
  right: 52px;
  background-image: linear-gradient(
    to right top,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );
  z-index: 1000;
  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);

  @media ${device.tablet} {
    height: 30px;
    width: 30px;
    top: 27px;
    right: 27px;
  }
`;

const NavButton = styled.label`
  background-color: #fff;
  height: 55px;
  width: 55px;
  position: fixed;
  top: 45px;
  right: 45px;
  border-radius: 50%;
  z-index: 2000;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;

  @media ${device.tablet} {
    height: 40px;
    width: 40px;
    top: 20px;
    right: 20px;
  }

  &:hover ${NavIcon}:before {
    top: -10px;

    @media ${device.tablet} {
      top: -8px;
    }
  }

  &:hover ${NavIcon}:after {
    top: 10px;

    @media ${device.tablet} {
      top: 8px;
    }
  }
`;

const NavIcon = styled.span`
  position: relative;
  margin-top: 28px;

  @media ${device.tablet} {
    margin-top: 20px;
  }

  &,
  &:before,
  &:after {
    width: 30px;
    height: 2px;
    background-color: #333;
    display: inline-block;

    @media ${device.tablet} {
      width: 22px;
    }
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }

  &::before {
    top: -8px;

    @media ${device.tablet} {
      top: -6px;
    }
  }
  &::after {
    top: 8px;

    @media ${device.tablet} {
      top: 6px;
    }
  }
`;

const Nav = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  left: -95%;
  z-index: 1500;
  opacity: 0;
  width: 0;
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;

const NavList = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(45%, -50%);
  list-style: none;
  text-align: center;
  width: 100%;
  transition: all 0.4s;
`;

const NavItem = styled.li`
  margin: 10px;
`;

const NavLink = styled.span`
  display: inline-block;
  font-size: 40px;
  font-weight: 700;
  padding: 10px 20px;
  color: #fff;
  text-transform: uppercase;
  background-image: linear-gradient(
    105deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 220%;
  transition: all 0.4s;
  cursor: pointer;

  @media ${device.phone} {
    font-size: 34px;
  }

  @media ${device.mobileM} {
    font-size: 30px;
  }

  &:hover {
    background-position: 100%;
    color: #fc3565;
  }
`;

const NavInput = styled.input`
  display: none;

  &:checked + ${NavButton} ${NavIcon} {
    background-color: transparent;
  }

  &:checked + ${NavButton} ${NavIcon}:before {
    top: 0;
    transform: rotate(135deg);
  }

  &:checked + ${NavButton} ${NavIcon}:after {
    top: 0;
    transform: rotate(-135deg);
  }

  &:checked ~ ${NavBackground} {
    transform: scale(120);
  }

  &:checked ~ ${Nav} {
    opacity: 1;
    width: 100%;
  }
`;

export {
  Container,
  NavBackground,
  NavButton,
  NavIcon,
  Nav,
  NavList,
  NavItem,
  NavLink,
  NavInput
};
