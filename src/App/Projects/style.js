import styled from 'styled-components';
import { device } from '../../shared/MediaQueries';

const Background = styled.div`
  background-color: #333;
  background-image: url('/static/bck-black.svg');
  background-attachment: fixed;
  background-size: cover;
`;

const Wrapper = styled.div`
  padding: 130px 0px 281px 0px;

  .cards-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 165px;

    @media ${device.desktopL} {
      margin: 165px 110px 0 110px;

      div:nth-child(2) div {
        margin-right: 0px;
      }

      div:nth-child(3) {
        margin-top: 60px;
      }
    }

    @media ${device.desktopM} {
      margin: 165px 60px 0 60px;
    }

    @media ${device.desktopS} {
      flex-direction: column;

      div:nth-child(1) div {
        margin-right: 0px;
        bottom: 60px;
      }
    }

    @media ${device.phone} {
      margin: 165px 0px 0px 0px;
    }
  }
`;

export { Background, Wrapper };
