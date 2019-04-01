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

    @media ${device.desktopL} {
      width: 47%;
    }

    @media ${device.desktopM} {
      width: 57%;
    }

    @media ${device.desktopS} {
      width: 60%;
    }

    @media ${device.tablet} {
      width: 70%;
    }

    @media ${device.tabletM} {
      width: 75%;
    }
  }

  .skills-wrapper {
    width: 41%;

    @media ${device.desktopB} {
      margin-top: 130px;
    }

    @media (max-width: 1430px) {
      width: 580px;
    }

    @media ${device.tabletM} {
      width: 540px;
    }

    @media ${device.tabletS} {
      width: 460px;
    }

    @media ${device.phone} {
      width: 360px;
    }

    @media ${device.mobileS} {
      width: 280px;
    }
  }

  img {
    max-width: 80%;

    @media ${device.desktopB} {
      width: 320px;
    }
  }

  p {
    color: #fff;
    font-size: 19px;
    margin-top: 45px;
    line-height: 31px;

    @media ${device.tabletS} {
      font-size: 18px;
      line-height: 29px;
    }

    @media ${device.phone} {
      font-size: 17px;
      line-height: 27px;
    }

    @media ${device.mobileS} {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 75px;

  @media ${device.mobileL} {
    display: grid;
    grid-template-columns: repeat(12, 30px);
    grid-row-gap: 35px;
    justify-items: center;

    div:nth-child(1) {
      grid-column: 4;
    }

    div:nth-child(2) {
      grid-column: 9;
    }

    div:nth-child(3) {
      grid-column: 4;
      grid-row-start: 2;
    }

    div:nth-child(4) {
      grid-column: 9;
      grid-row-start: 2;
    }

    div:nth-child(5) {
      grid-column: 7;
      grid-row-start: 3;
      margin-right: 100%;
    }
  }

  @media ${device.mobileS} {
    grid-template-columns: repeat(12, 23.3px);

    div:nth-child(5) {
      grid-column: 6;
      grid-row-start: 3;
      margin-left: 100%;
      margin-right: 0%;
    }
  }
`;

export { Background, Wrapper, Flex, CardsWrapper };
