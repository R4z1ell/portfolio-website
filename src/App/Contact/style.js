import styled, { keyframes } from 'styled-components';
import Slide from 'react-reveal/Slide';
import withReveal from 'react-reveal/withReveal';
import { device } from '../../shared/MediaQueries';

const Background = styled.div`
  height: calc(100vh - 111px);
  background-image: url('/static/Endless-Constellation.svg');
`;

const Wrapper = styled.div`
  padding: 130px 0px 157px 0px;
  font-family: 'Ubuntu';

  input[type='text'],
  input[type='email'] {
    background: #343434;
    border: 0;
    height: 54px;
    font-size: 20px;
    font-family: inherit;
    color: #fff;
    padding: 0 20px;
    width: 100%;

    @media ${device.tabletS} {
      font-size: 18px;
    }

    &:focus {
      outline: none;

      & + label:after {
        transform: translate3d(0, 0, 0);
      }
    }
  }

  li {
    list-style: none;
    display: block;
    margin-bottom: 10px;
    position: relative;
    overflow: hidden;

    &:nth-child(3) {
      margin-bottom: 0px;
    }
  }

  textarea {
    background: #343434;
    width: 100%;
    border: 0;
    font-size: 20px;
    font-family: inherit;
    color: #fff;
    padding: 15px 20px;
    min-height: 160px;
    resize: vertical;

    @media ${device.tabletS} {
      font-size: 18px;
    }

    &:focus {
      outline: none;

      & + label:after {
        transform: translate3d(0, 0, 0);
      }
    }
  }
`;

const Label = styled.label`
  &:before,
  &:after {
    content: '';
    position: absolute;
    bottom: ${props => props.bottom};
    left: 0;
    width: 100%;
    height: 1px;
  }

  &:after {
    margin-top: 2px;
    border-bottom: 2px solid #04c2c9;
    transform: translate3d(-100%, 0, 0);
    transition: transform 0.5s;
  }
`;

const Highlight = withReveal(
  styled.div`
    font-family: 'Ubuntu';
    font-weight: 700;
    font-size: 23px;
    color: #04c2c9;
    text-align: center;
    margin-top: 120px;
    margin-bottom: 40px;

    @media ${device.tablet} {
      font-size: 20px;
    }

    @media ${device.tabletM} {
      font-size: 18px;
    }

    @media ${device.tabletS} {
      font-size: 16px;
    }
  `,
  <Slide top ssrReveal={true} />
);

const Button = styled.button`
  background: #fc3565;
  width: 100%;
  height: 54px;
  border: 0;
  color: #fff;
  font-family: inherit;
  font-size: 23px;
  font-weight: 700;
  transition: 0.2s;
  cursor: pointer;

  @media ${device.tabletS} {
    font-size: 20px;
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;

const Form = styled.form`
  width: 666px;
  margin: 0 auto;

  @media ${device.tablet} {
    width: 80%;
  }
`;

export { Background, Wrapper, Highlight, Button, Label, Form };
