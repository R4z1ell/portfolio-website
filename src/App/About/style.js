import styled from 'styled-components';

const Background = styled.div`
  background-color: #73878e;
  background-image: url('/static/bck.svg');
  background-attachment: fixed;
  background-size: cover;
`;

const Wrapper = styled.div`
  padding: 130px 130px 300px 130px;

  h1 {
    font-size: 48px;
    color: #fff;
    text-transform: uppercase;
    border: 4px double #fff;
    margin: 0 auto;
    border-width: 4px 0;
    width: 175px;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 130px;

  .about-wrapper {
    width: 40%;
    margin-left: 43px;
    text-align: center;
  }

  .skills-wrapper {
    width: 43%;
  }

  p {
    color: #fff;
    font-size: 19px;
    margin-top: 45px;
    line-height: 31px;
  }
`;

export { Background, Wrapper, Flex };
