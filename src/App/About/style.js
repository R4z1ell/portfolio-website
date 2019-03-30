import styled from 'styled-components';
import { device } from '../../shared/MediaQueries';

const Background = styled.div`
  background-color: #73878e;
  background-image: url('/static/bck.svg');
  background-attachment: fixed;
  background-size: cover;
`;

const Wrapper = styled.div`
  padding: 130px 130px 225px 130px;

  @media ${device.desktopB} {
    padding: 130px 0px 225px 0px;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 130px;

  @media ${device.desktopB} {
    flex-direction: column;
  }

  .about-wrapper {
    width: 41%;
    text-align: center;
  }

  .skills-wrapper {
    width: 41%;

    @media ${device.desktopB} {
      margin-top: 130px;
    }

    @media (max-width: 1430px) {
      width: 580px;
    }
  }

  img {
    max-width: 80%;
  }

  p {
    color: #fff;
    font-size: 19px;
    margin-top: 45px;
    line-height: 31px;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 75px;
`;

export { Background, Wrapper, Flex, CardsWrapper };
