import styled from 'styled-components';

const Background = styled.div`
  background-color: #333;
  background-image: url('/static/bck-black.svg');
  background-attachment: fixed;
  background-size: cover;
`;

const Wrapper = styled.div`
  padding: 130px 375px 250px 375px;

  h1 {
    font-size: 48px;
    color: #fff;
    text-transform: uppercase;
    border: 4px double #fff;
    margin: 0 auto;
    border-width: 4px 0;
    width: 249px;
  }

  .cards-container {
    display: flex;
    justify-content: space-between;
    margin-top: 165px;
  }
`;

export { Background, Wrapper };
