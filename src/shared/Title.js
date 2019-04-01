import styled from 'styled-components';
import Slide from 'react-reveal/Slide';
import withReveal from 'react-reveal/withReveal';
import { device } from './MediaQueries';

const Title = withReveal(
  styled.h1`
    font-size: 48px;
    color: #fff;
    text-transform: uppercase;
    border: 4px double #fff;
    margin: 0 auto;
    border-width: 4px 0;
    width: fit-content;

    @media ${device.tablet} {
      font-size: 40px;
    }

    @media ${device.phone} {
      font-size: 36px;
    }

    @media ${device.mobileS} {
      font-size: 30px;
    }
  `,
  <Slide right ssrReveal={true} />
);

export { Title };
