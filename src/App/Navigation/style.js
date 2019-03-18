import styled from 'styled-components';

const NavMenu = styled.div`
  position: absolute;
  top: 32px;
  right: 20px;
  display: block;
  width: 42px;
  height: 42px;
  cursor: pointer;
  z-index: 333;

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
  z-index: 20;

  .menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    opacity: 0;
    visibility: hidden;

    li {
      display: block;
      padding: 15px 0;
      font-family: 'Varela Round';
      font-size: 50px;
      text-transform: uppercase;
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
    height: 65%;
    background-color: #fff;

    &.middle {
      top: 29%;
      left: -55%;
      transform: rotate(-45deg) scaleY(0);
    }
    &.top {
      left: -80%;
      top: 0;
      height: 69%;
      transform: rotate(-45deg) translateY(-152%);
    }
    &.bottom {
      top: 135%;
      transform: rotate(-45deg) translateY(25%);
      left: -20%;
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

export { NavMenu, InnerContainer, CloseTrigger };
