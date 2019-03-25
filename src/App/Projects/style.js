import styled from 'styled-components';

const Background = styled.div`
  background-color: #333;
  background-image: url('/static/bck-black.svg');
  background-attachment: fixed;
  background-size: cover;
`;

const Wrapper = styled.div`
  padding: 130px 375px 281px 375px;

  .cards-container {
    display: flex;
    justify-content: space-between;
    margin-top: 165px;
  }
`;

export { Background, Wrapper };
