import styled from 'styled-components';

const StylesTable = styled.div`
  .first_grid {
    display: grid;
    text-align: center;
    grid-template-columns: 300px 300px 35vw 35vw 35vmax;

    @media (min-width: 1024px) {
      grid-template-columns: 25% 25% 15% 15% 20%;
    }
  }

  .grid {
    display: grid;
    text-align: center;
    grid-template-columns: 300px 300px 35vw 35vw 35vmax;

    @media (min-width: 1024px) {
      grid-template-columns: 25% 25% 15% 15% 20%;
    }
  }

  .full_grid {
    padding-top: 2vh;

    overflow-x: scroll;

    @media (min-width: 1024px) {
      padding: 0;
      overflow-x: hidden;
    }
  }

  .first_grid div[class~='dark_bg'],
  .grid div[class~='dark_bg'] {
    border-color: white;
  }

  .first_grid-item-id {
    order: 1;
    font-size: calc(3vmax * 1.1);

    border-top: 2px solid black;
    border-bottom: 1px solid black;
    border-left: 2px solid black;
    border-right: 1px solid black;

    @media (min-width: 1024px) {
      font-size: calc(2.2vmax * 1.2);
    }
  }

  .first_grid-item-name {
    order: 2;
    font-size: calc(3vmax * 1.1);
    border-top: 2px solid black;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;

    @media (min-width: 1024px) {
      font-size: calc(2.2vmax * 1.2);
    }
  }

  .first_grid-item-icon {
    order: 3;
    font-size: calc(3vmax * 1.1);
    border-top: 2px solid black;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;

    @media (min-width: 1024px) {
      font-size: calc(2.2vmax * 1.2);
    }
  }

  .first_grid-item-currentPrice {
    order: 4;
    font-size: calc(3vmax * 1.1);
    border-top: 2px solid black;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;

    @media (min-width: 1024px) {
      font-size: calc(2.2vmax * 1.2);
    }
  }

  .first_grid-item-marketCap {
    order: 5;
    font-size: calc(3vmax * 1.1);
    border-top: 2px solid black;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;

    @media (min-width: 1024px) {
      font-size: calc(2.2vmax * 1.2);
    }
  }

  .grid-item-id {
    grid-column-start: 1;
    font-size: calc(2.8vmax * 1.1);
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-left: 2px solid black;
    border-right: 1px solid black;

    @media (min-width: 1024px) {
      font-size: 2.1vmax;
    }
  }

  .grid-item-name {
    grid-column-start: 2;
    font-size: calc(2.8vmax * 1.1);
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    padding: 0 20px;

    @media (min-width: 1024px) {
      font-size: 2.1vmax;
    }
  }

  .grid-item-icon {
    grid-column-start: 3;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
  }

  .grid-item-icon img {
    width: 6.5vw;
    height: 6.5vh;

    @media (min-width: 1024px) {
      width: 5vw;
      height: 5vh;
    }
  }

  .grid-item-currentPrice {
    grid-column-start: 4;
    font-size: calc(2.8vmax * 1.1);
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;

    @media (min-width: 1024px) {
      font-size: 2.1vmax;
    }
  }

  .grid-item-marketCap {
    grid-column-start: 5;
    font-size: calc(2.8vmax * 1.1);
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    border-right: 2px solid black;

    @media (min-width: 1024px) {
      font-size: 1.9vw;
    }
  }

  .grid:last-child
    *:is(.grid-item-name, .grid-item-icon, .grid-item-currentPrice) {
    border-bottom: 2px solid black;
  }

  .grid:last-child *:is(.grid-item-id) {
    border-bottom: 2px solid black;
  }

  .grid:last-child *:is(.grid-item-marketCap) {
    border-bottom: 2px solid black;
  }

  .grid:last-child *[class~='dark_bg'] {
    border-color: white;
  }
`;

export default StylesTable;
