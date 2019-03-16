import styled from 'styled-components';

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
  font-size: 4.2rem;
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
  background: transparent;
  padding: 18px 35px;
  font-family: inherit;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  border: 2px solid #fff;
  z-index: 1;
  transition: all 0.5s;
  position: relative;

  &:hover {
    background: #04c2c9;
    border-color: #04c2c9;
  }
`;

const BtnProject = styled(Button)`
  background: #fc3565;
  border: none;
  margin-right: 20px;

  &:hover {
    background: transparent;
    border-color: none;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    height: 0;
    width: 0;
    border: 0px solid #fc3565;
  }

  &:before {
    top: 0px;
    right: -1.4px;
  }

  &:after {
    bottom: 0px;
    left: 1.4px;
  }

  &:hover:before,
  &:hover:after {
    width: 100%;
    height: 100%;
    border: 2px solid #fc3565;
  }

  &:hover:before {
    border-bottom-color: transparent;
    border-right-color: transparent;
    transition: width 0.4s 0s, height 0.4s 0.4s;
  }

  &:hover:after {
    border-top-color: transparent;
    border-left-color: transparent;
    transition: width 0.4s 0.8s, height 0.4s 1.2s, border 0s 0.8s;
  }
`;

const NavMenu = styled.div`
  position: absolute;
  top: 32px;
  right: 32px;
  display: block;
  width: 42px;
  height: 42px;
  cursor: pointer;
  z-index: 4;

  &:hover {
    .menu-trigger-bar {
      &:before {
        width: 100%;
      }
    }
  }

  .menu-trigger-bar {
    display: block;
    width: 100%;
    height: 4px;
    background-color: #fff;
    margin-bottom: 6px;
    transform: rotate(-45deg);
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
    }

    &.top {
      width: 50%;
    }
    &.middle {
      &:before {
        left: auto;
        right: 0;
      }
    }
    &.bottom {
      width: 50%;
      margin-left: 50%;
    }
  }
`;

const InnerContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 2;

  .menu-container {
    display: flex;
    align-items: center;
  }
  .menu {
    display: block;
    width: 100%;
    padding: 20%;

    li {
      text-align: left;
      display: block;
      padding: 15px 0;
    }

    a {
      text-decoration: none;
      color: #222;
      display: inline-block;
      padding: 10px 0;
      position: relative;

      &:hover {
        &:before {
          opacity: 1;
          transform: translateX(0px);
        }
      }

      &:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 18px;
        height: 4px;
        opacity: 0;
        background-color: #222;
        transform: translateX(100px);
        transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
      }
    }
  }

  .menu-bg {
    position: absolute;
    display: block;
    width: 200%;
    left: -53%;
    top: -25%;
    height: 53%;
    background-color: #fff;

    &.middle {
      top: 29%;
      left: -53%;
      transform: rotate(-45deg) scaleY(0);
    }
    &.top {
      left: -67%;
      top: 0;
      transform: rotate(-45deg) translateY(-152%);
    }
    &.bottom {
      top: 105%;
      transform: rotate(-45deg) translateY(25%);
      left: -5%;
    }
  }
`;

const CloseTrigger = styled.div`
  position: absolute;
  top: 32px;
  right: 32px;
  display: block;
  width: 42px;
  height: 42px;
  cursor: pointer;
  z-index: 3;

  &:hover {
    .close-trigger-bar {
      &:before {
        width: 100%;
      }
    }
  }

  .close-trigger-bar {
    display: block;
    width: 100%;
    height: 4px;
    background-color: #222;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 0%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.2);
      transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
    }

    &.left {
      transform: translateX(100px) translateY(-100px) rotate(-45deg);
    }
    &.right {
      transform: translateX(-100px) translateY(-100px) rotate(45deg);
      top: -3px;
    }
  }
`;

export {
  StyledCanvas,
  Flex,
  Text,
  Wrapper,
  Button,
  BtnProject,
  NavMenu,
  InnerContainer,
  CloseTrigger
};
