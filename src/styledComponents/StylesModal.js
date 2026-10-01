import styled from 'styled-components';

const StylesModal = styled.div`
  color: black;

  *:not(#title) {
    font-size: 3.5vh;

    @media (min-width: 1024px) {
      font-size: 4vh;
    }
  }

  li img {
    width: 6vw;
    height: 4.5vh;

    @media (min-width: 1024px) {
      width: 6vw;
      height: 6vh;
    }
  }
`;

export default StylesModal;
