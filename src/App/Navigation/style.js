import styled from 'styled-components';
import { device } from '../../shared/MediaQueries';

const NavMenu = styled.div`
  position: fixed;
  top: 35px;
  right: 35px;
  display: block;
  width: 42px;
  height: 42px;
  cursor: pointer;
  z-index: 333;

  @media ${device.desktopS} {
    top: 30px;
    right: 25px;
  }

  @media ${device.phone} {
    top: 25px;
    right: 20px;
  }

  @media ${device.mobileM} {
    top: 23px;
    right: 15px;
  }

  @media ${device.mobileS} {
    top: 20px;
    right: 11px;
  }

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
  position: fixed;
  display: none;
  height: 100vh;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
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

      span {
        cursor: pointer;
      }

      .text-underline {
        text-decoration: none;
        color: #fff;
        display: inline-block;
        padding: 1px;
        position: relative;

        &:hover {
          color: #fc3565;
          transition: color 1s ease;

          &:after {
            width: 100%;
            background: #fc3565;
          }
        }

        &:focus {
          &:after {
            width: 100%;
            background: #fc3565;
          }
        }

        &:after {
          content: '';
          height: 5px;
          left: 0;
          bottom: 10px;
          width: 1px;
          position: absolute;
          transition: width 1s ease, background-color 1s ease;
          right: 0;
          margin: 0 auto;
        }
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
    background-color: #49738d;

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
      left: -20%;
      transform: rotate(-45deg) translateY(25%);
    }
  }
`;

const CloseTrigger = styled.div`
  position: fixed;
  top: 35px;
  right: 35px;
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
    background-color: #fff;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 0%;
      height: 100%;
      background-color: #fc3565;
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
