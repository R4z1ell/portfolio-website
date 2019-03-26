import styled from 'styled-components';

const colors = {
  jetdeals: '#1572b6',
  cinema: '#4FC08D',
  sensation: '#CFA670'
};

const shadows = {
  jetdeals: '#144f7a',
  cinema: '#388060',
  sensation: '#89704D'
};

const margins = {
  jetdeals: '20px',
  cinema: '17px',
  sensation: '31px'
};

const CardWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 420px;
  border-radius: 6px;
  background-color: #141414;
  border: 2px solid ${props => colors[props.color]};

  .image {
    width: 100%;
    height: 68.8%;
    margin-top: 3px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const Flex = styled.div`
  display: flex;
  font-family: 'Ubuntu';
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 24px;
    font-weight: 700;
    color: ${props => colors[props.color]};
    margin-right: ${props => margins[props.color]};
  }

  span {
    padding: 3px 6px;
    background-color: #313440;
    border: 2px solid ${props => colors[props.color]};
    border-radius: 3px;
    font-size: 10px;
    font-weight: 700;
    margin-right: 5px;
    color: #fff;
    text-transform: uppercase;
  }

  .tech-wrapper {
    line-height: 20px;
    margin-bottom: 1px;
  }
`;

const Button = styled.button`
  background: ${props => colors[props.color]};
  color: white;
  border: none;
  border-radius: 3px;
  box-shadow: 0 4px 0px ${props => shadows[props.shadow]};
  display: flex;
  align-items: center;
  transition: all 0.2s;
  padding: 5px 13px;
  font-family: 'Ubuntu';
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  position: absolute;
  bottom: 25px;
  left: ${props => (props.source ? '179px' : '68px')};

  &:active {
    bottom: 23px;
    box-shadow: 0 2px 0px ${props => shadows[props.shadow]};
    transition: all 0.2s;
  }

  &:focus {
    outline: 0;
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 7px;
    margin-bottom: -1px;
  }
`;

export { CardWrapper, Flex, Button };
