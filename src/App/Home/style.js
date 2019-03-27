import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import withReveal from 'react-reveal/withReveal';
import { device } from '../../shared/MediaQueries';

const SectionHome = styled.section`
  overflow: hidden;
`;

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

const Text = withReveal(
  styled.div`
    font-size: 42px;
    line-height: 54px;
    text-align: center;
    pointer-events: none;
    margin-bottom: 15px;
    color: #fff;
    z-index: 1;

    @media ${device.desktop} {
      font-size: 36px;
      line-height: 44px;
    }

    @media ${device.tablet} {
      font-size: 32px;
      line-height: 41px;
    }

    @media ${device.tabletM} {
      font-size: 28px;
      line-height: 38px;
    }

    @media ${device.tabletS} {
      font-size: 24px;
      line-height: 31px;
    }

    span {
      color: #fc3565;
      margin-left: 10px;
    }
  `,
  <Zoom cascade ssrReveal={true} />
);

const Wrapper = withReveal(
  styled.div`
    display: flex;
  `,
  <Fade bottom ssrReveal={true} />
);

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

  @media ${device.desktop} {
    padding: 15px 30px;
  }

  @media ${device.tablet} {
    padding: 15px 28px;
  }

  @media ${device.tablets} {
    font-size: 14px;
  }

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

export { SectionHome, StyledCanvas, Flex, Text, Wrapper, Button, BtnProject };
