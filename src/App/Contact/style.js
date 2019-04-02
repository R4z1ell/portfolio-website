import styled from 'styled-components';
import Slide from 'react-reveal/Slide';
import withReveal from 'react-reveal/withReveal';
import { device } from '../../shared/MediaQueries';

const Background = styled.div`
  background-image: url('/static/Endless-Constellation.svg');
`;

const Wrapper = styled.div`
  padding: 160px 0px 157px 0px;
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

    @media ${device.mobileM} {
      font-size: 17px;
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

    &:nth-child(4) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: -2px;
      height: 0;
      transition: all 0.25s;
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

    @media ${device.mobileM} {
      font-size: 17px;
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
    border-bottom: ${props =>
      props.labelError ? '2px solid #d12a10' : '2px solid #04c2c9'};
    transform: ${props =>
      props.labelError ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)'};
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
      font-size: 22px;
    }

    @media ${device.tabletM} {
      font-size: 21px;
    }

    @media ${device.tabletS} {
      font-size: 20px;
    }

    @media ${device.mobileL} {
      line-height: 25px;
      margin-left: 9%;
      margin-right: 9%;
    }

    @media ${device.mobileM} {
      font-size: 19px;
      margin-left: 5%;
      margin-right: 5%;
    }

    @media ${device.mobileS} {
      font-size: 17px;
      margin-left: 9%;
      margin-right: 9%;
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

  @media ${device.mobileM} {
    font-size: 17px;
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

const ErrorMessage = styled.li`
  background-color: ${props => (props.success ? '#04c986' : '#cb2424')};
  border: ${props =>
    props.success ? '1px solid #157c59' : '1px solid #b62020'};
  height: 45px;
  color: #fff;
  font-weight: 700;
  font-size: 17px;
  opacity: 0;

  @media ${device.mobileL} {
    font-size: 16px;
  }

  @media ${device.mobileM} {
    font-size: 15px;
  }

  @media ${device.mobileS} {
    font-size: 13px;
  }

  div span svg {
    width: 11px;
    height: 11px;
    fill: #fff;
    position: absolute;
    top: 38%;
    right: 3%;
    cursor: pointer;
  }
`;

export { Background, Wrapper, Highlight, Button, Label, Form, ErrorMessage };
