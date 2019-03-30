import styled from 'styled-components';

let colors = {
  html: '#e44d26',
  css: '#7ebaff',
  js: '#fecf5f',
  react: '#61dafb',
  node: '#83cd29'
};

const CardWrapper = styled.div`
  width: 100px;
  cursor: pointer;

  &:hover li:nth-child(11) {
    background: ${props => colors[props.skillName]};
    transition: all 0.5s ease;
  }

  &:hover li:nth-child(10) {
    background: ${props =>
      props.level >= 1 ? colors[props.skillName] : '#ccc'};
    transition: all 1s ease;
  }

  &:hover li:nth-child(9) {
    background: ${props =>
      props.level >= 2 ? colors[props.skillName] : '#ccc'};
    transition: all 1.5s ease;
  }

  &:hover li:nth-child(8) {
    background: ${props =>
      props.level >= 3 ? colors[props.skillName] : '#ccc'};
    transition: all 2s ease;
  }

  &:hover li:nth-child(7) {
    background: ${props =>
      props.level >= 4 ? colors[props.skillName] : '#ccc'};
    transition: all 2.5s ease;
  }

  &:hover li:nth-child(6) {
    background: ${props =>
      props.level >= 5 ? colors[props.skillName] : '#ccc'};
    transition: all 3s ease;
  }

  &:hover li:nth-child(5) {
    background: ${props =>
      props.level >= 6 ? colors[props.skillName] : '#ccc'};
    transition: all 3.5s ease;
  }

  &:hover li:nth-child(4) {
    background: ${props =>
      props.level >= 7 ? colors[props.skillName] : '#ccc'};
    transition: all 4s ease;
  }

  &:hover li:nth-child(3) {
    background: ${props =>
      props.level >= 8 ? colors[props.skillName] : '#ccc'};
    transition: all 4.5s ease;
  }

  &:hover li:nth-child(2) {
    background: ${props =>
      props.level >= 9 ? colors[props.skillName] : '#ccc'};
    transition: all 5s ease;
  }

  &:hover li:nth-child(1) {
    background: ${props =>
      props.level === 10 ? colors[props.skillName] : '#ccc'};
    transition: all 5.5s ease;
  }

  & li:nth-child(10) {
    background: ${props => (props.level >= 1 ? '#313440' : '#ccc')};
  }

  & li:nth-child(9) {
    background: ${props => (props.level >= 2 ? '#313440' : '#ccc')};
  }

  & li:nth-child(8) {
    background: ${props => (props.level >= 3 ? '#313440' : '#ccc')};
  }

  & li:nth-child(7) {
    background: ${props => (props.level >= 4 ? '#313440' : '#ccc')};
  }

  & li:nth-child(6) {
    background: ${props => (props.level >= 5 ? '#313440' : '#ccc')};
  }

  & li:nth-child(5) {
    background: ${props => (props.level >= 6 ? '#313440' : '#ccc')};
  }

  & li:nth-child(4) {
    background: ${props => (props.level >= 7 ? '#313440' : '#ccc')};
  }

  & li:nth-child(3) {
    background: ${props => (props.level >= 8 ? '#313440' : '#ccc')};
  }

  & li:nth-child(2) {
    background: ${props => (props.level >= 9 ? '#313440' : '#ccc')};
  }

  & li:nth-child(1) {
    background: ${props => (props.level === 10 ? '#313440' : '#ccc')};
  }

  &:hover .html svg path {
    transition: all 1s ease;
    fill: #313440;
  }

  &:hover .css svg path {
    transition: all 1s ease;
    fill: #313440;
  }

  &:hover .js svg path {
    transition: all 1s ease;
    fill: #313440;
  }

  &:hover .react svg path {
    transition: all 1s ease;
    fill: #313440;
  }

  &:hover .node svg path {
    transition: all 1s ease;
    fill: #313440;
  }

  ul {
    margin: 0px;
    padding: 0px;
    list-style-type: none;
  }

  li {
    margin-bottom: 4px;
    padding: 5px;
    position: relative;
    transition: all 2s ease;
  }

  ul li:last-child {
    height: 100px;
    background: #313440;
    margin-bottom: 0px;
    text-align: center;
    transition: all 2s ease;
  }

  .js svg {
    margin-top: 23px;
    width: 50%;
  }

  .node svg {
    margin-top: 21px;
    width: 55%;
  }

  .react svg {
    margin-top: 18px;
    width: 62%;
  }

  svg {
    margin-top: 13px;
    width: 70%;
  }
`;

export { CardWrapper };
