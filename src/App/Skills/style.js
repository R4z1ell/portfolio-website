import styled from 'styled-components';
import { device } from '../../shared/MediaQueries';

const SkillsContainer = styled.div`
  background-color: #313440;
  border-radius: 5px 0 5px 5px;
  box-shadow: 0 10px 6px -6px #000;
  border: 1px solid #1b1c22;
  font-family: Inconsolata;
  font-weight: bold;

  @media ${device.mobileL} {
    width: 90%;
    margin: 0 auto;
  }

  @media ${device.mobileM} {
    width: 80%;
    margin: 0 auto;
  }

  @media ${device.mobileS} {
    width: 100%;
  }

  .comment {
    color: #5c6370;
    font-style: italic;
  }

  .content {
    padding: 20px 0 20px 10px;
    font-size: 17px;

    @media ${device.mobileL} {
      font-size: 16px;
    }
  }

  .linenumber {
    color: #414556;
    padding: 0 15px 0 0;
    font-weight: normal;
  }

  .title {
    color: #dbb984;
    width: 60%;
    position: relative;
    padding: 5px 0 7px 5px;
    text-align: center;
    font-size: 20px;
    word-wrap: break-word;

    @media ${device.mobileL} {
      font-size: 16px;
    }

    &:after {
      position: absolute;
      top: 0;
      left: 100%;
      content: '';
      color: #6e7180;
      width: 66.7%;
      padding-top: 5px;
      height: 100%;
      background-color: #262831;
      border-bottom: 1px solid #1b1c22;
      border-left: 1px solid #1b1c22;
    }
  }

  svg {
    width: 16px;
    height: 16px;
    margin-right: 5px;
    margin-bottom: -1px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    line-height: 17px;

    .html {
      color: #e44d26;
    }

    .css {
      color: #7ebaff;
    }

    .js {
      color: #fecf5f;
    }

    .react {
      color: #61dafb;
    }

    .node {
      color: #83cd29;
    }

    li {
      white-space: nowrap;

      span {
        white-space: normal;
        word-wrap: break-word;
      }
    }
  }
`;

export { SkillsContainer };
