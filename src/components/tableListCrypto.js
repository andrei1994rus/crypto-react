import React, { useContext, useEffect } from 'react';

import ListContext from './listContext';
import StylesTable from '../styledComponents/StylesTable';

const TableListCrypto = () => {
  const { items } = useContext(ListContext);

  const outputGrid = (id, name, image, currentPrice, market_cap, index) => (
    <div className="grid" key={index}>
      <div className="grid-item-id">{id}</div>
      <div className="grid-item-name">{name}</div>
      <div className="grid-item-icon">
        <img src={image} alt={id} />
      </div>
      <div className="grid-item-currentPrice">{currentPrice}</div>
      <div className="grid-item-marketCap">{market_cap}</div>
    </div>
  );

  const mapItems = (item, index) => {
    const { symbol, name, image, current_price, market_cap } = item;

    return outputGrid(symbol, name, image, current_price, market_cap, index);
  };

  useEffect(() => {
    const chb = document.getElementById('checkbox');
    let first_rows = document.querySelectorAll('.first_grid > div');
    let other_rows = document.querySelectorAll('.grid > div');

    if (chb.checked) {
      for (let row of first_rows) {
        row.classList.add('dark_bg');
      }

      for (let other_row of other_rows) {
        other_row.classList.add('dark_bg');
      }
    } else {
      for (let row of first_rows) {
        row.classList.remove('dark_bg');
      }

      for (let other_row of other_rows) {
        other_row.classList.remove('dark_bg');
      }
    }
  }, []);

  return (
    <StylesTable>
      <div className="full_grid">
        <div className="first_grid">
          <div className="first_grid-item-id">Id</div>
          <div className="first_grid-item-name">Name</div>
          <div className="first_grid-item-icon">Icon</div>
          <div className="first_grid-item-currentPrice">Current price</div>
          <div className="first_grid-item-marketCap">Market Cap</div>
        </div>
        {items.map((item, index) => mapItems(item, index))}
      </div>
    </StylesTable>
  );
};

export default TableListCrypto;
