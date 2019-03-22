import styled from 'styled-components';

const CardWrapper = styled.div`
  float: left;
  margin-top: 75px;
  margin-right: 36px;
  width: 100px;

  &:hover {
    cursor: pointer;
  }

  ul {
    margin: 0px;
    padding: 0px;
    list-style-type: none;
  }

  li {
    margin-bottom: 6px;
    padding: 5px;
    background: #ccc;
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
    width: 53%;
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
