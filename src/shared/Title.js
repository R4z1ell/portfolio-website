import styled from 'styled-components';

const Title = styled.h1`
  font-size: 48px;
  color: #fff;
  text-transform: uppercase;
  border: 4px double #fff;
  margin: 0 auto;
  border-width: 4px 0;
  width: ${props => props.width};
`;

export { Title };
