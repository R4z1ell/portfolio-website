import styled from 'styled-components';

const FooterStyle = styled.footer`
  background: #333;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  position: relative;
  margin: 0 130px;
`;

const Copyright = styled.div`
  font-family: 'Varela Round';
  font-size: 15px;
  color: #fff;
  white-space: nowrap;

  span {
    color: #fc3565;
  }
`;

const Social = styled.a`
  position: absolute;
  top: -60px;
  left: ${props => props.left};
  height: 40px;
  width: 40px;
  background-color: #fc3565;
  transform: rotate(45deg);
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    background-color: #04c2c9;
  }

  svg {
    fill: #fff;
    transform: rotate(-45deg);
    margin-top: ${props => props.marginTop};
    margin-left: ${props => props.marginLeft};
    width: ${props => props.width};
  }
`;

export { FooterStyle, Wrapper, Copyright, Social };
