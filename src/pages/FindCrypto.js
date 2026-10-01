import React, { createRef, Component } from 'react';

import StylesPage from '../styledComponents/StylesPage';

import headerPage from '../components/headerPage';
import Loading from '../components/Loading';
import CryptoModal from '../components/cryptoModal';
import ErrorModal from '../components/errorModal';

import ItemContext from '../components/itemContext';
import ErrorContext from '../components/errorContext';

import getData from '../functions/getData';

class FindCrypto extends Component {
  constructor(props) {
    super(props);

    this.resetState = () => {
      this.setState({
        cryptoInfo: {},
        error: '',
        isLoaded: true,
      });
    };

    this.state = {
      cryptoInfo: {},
      error: '',
      isLoaded: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = createRef();
  }

  handleSubmit = async (event) => {
    console.group('handleSubmit');
    event.preventDefault();
    let json_data;
    let errorMessage;
    this.setState({
      isLoaded: false,
      error: '',
    });

    try {
      if (!this.input.current.value) {
        let message = 'Empty input!';
        throw new Error(message);
      }

      let data = await getData(
        `${process.env.REACT_APP_URL}/currency/${this.input.current.value}`
      );
      console.log(data);
      console.log('status:' + data.status);

      if (data.status !== 200) {
        const statusText =
          data.status === 404 ? 'NOT FOUND' : 'Failed to fetch';
        let message = statusText + ' (' + data.status + ')!';
        throw new Error(message);
      }

      json_data = await data.json();
      console.log(json_data);
    } catch (e) {
      console.error(e.message);
      errorMessage = e.message;
    } finally {
      if (json_data) {
        this.setState({
          cryptoInfo: {
            id: json_data.symbol,
            name: json_data.name,
            image: json_data.image,
            currentPrice: json_data.current_price,
            marketCap: json_data.market_cap,
            ath: json_data.ath,
            atl: json_data.atl,
            atlDate: json_data.atl_date,
            athDate: json_data.ath_date,
          },
          error: '',
          isLoaded: true,
        });
      } else if (errorMessage) {
        console.log(errorMessage);
        this.setState({
          cryptoInfo: {},
          error: errorMessage,
          isLoaded: true,
        });
      }

      this.input.current.value = '';
      console.groupEnd();
    }
  };

  render = () => {
    const { cryptoInfo, error, isLoaded } = this.state;
    return (
      <StylesPage>
        <div className="div_findCrypto_content">
          <header>{headerPage('Find crypto.')}</header>
          {!isLoaded && (
            <div className="div_findCrypto_loading">
              <Loading />
            </div>
          )}
          <form className="form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              ref={this.input}
              placeholder="input symbol of currency"
            />
            <button id="btn" type="submit">
              Submit
            </button>
          </form>
          {Object.keys(cryptoInfo).length > 0 && (
            <div>
              <ItemContext.Provider
                value={{ cryptoInfo: cryptoInfo, resetState: this.resetState }}
              >
                <CryptoModal />
              </ItemContext.Provider>
            </div>
          )}
          {error && (
            <div>
              <ErrorContext.Provider
                value={{ error: error, resetState: this.resetState }}
              >
                <ErrorModal />
              </ErrorContext.Provider>
            </div>
          )}
        </div>
      </StylesPage>
    );
  };
}

export default FindCrypto;
