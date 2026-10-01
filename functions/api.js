const express = require('express');
const path = require('path');
const request = require('request');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const key = process.env.KEY;

const ServerlessHttp = require('serverless-http');

app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname, '../build')));

const cleanDate = (dateString) =>
  dateString
    .replace(/[a-zA-Z]/g, ' ')
    .replace('.000', ' ')
    .trim();

const upperSymbol = (symbol) => symbol.toUpperCase();

const iterationsInObject = (obj) => {
  for (let k in obj) {
    if (obj[k] instanceof Object) {
      obj[k]['symbol'] = upperSymbol(obj[k]['symbol']);
    }
  }
};

app.use('/.netlify/functions/api/currency/:id/', async (req, res) => {
  console.log(`path:${decodeURIComponent(req.url)}`);
  console.log(`id:${req.params.id}`);
  console.log(`statusCode:${res.statusCode}`);

  fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&symbols=${req.params.id}&x_cg_demo_api_key=${key}`
  )
    .then((resp) => resp.json())
    .then((json) => {
      console.log(json[0]);
      if (Object.keys(json).length === 0) {
        res.status(404).send('404 NOT FOUND');
      } else {
        const jsonData = json[0];
        jsonData['atl_date'] = cleanDate(jsonData['atl_date']);
        jsonData['ath_date'] = cleanDate(jsonData['ath_date']);
        jsonData['symbol'] = upperSymbol(jsonData['symbol']);
        console.log(jsonData);
        res.send(jsonData);
      }
    })
    .catch((err) => {
      console.log(err.message);
      res.status(400).send(err.message);
    });
});

app.use('/.netlify/functions/api/currency', async (req, res) => {
  console.log(`path:${req.url}`);
  try {
    request(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=${key}`,
      (error, response, body) => {
        let parsedBody = JSON.parse(body);
        console.log(parsedBody);
        if (parsedBody.status) {
          res
            .status(parsedBody.status.error_code)
            .send(parsedBody.status.error_message);
        } else if (Object.keys(body).length === 0) {
          throw new Error('Failed to fetch');
        } else {
          iterationsInObject(parsedBody);
          console.log(parsedBody);
          res.send(parsedBody);
        }
      }
    );
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

app.listen(port, () => console.log(`Server is running in ${port}`));

const handler = ServerlessHttp(app);

module.exports.handler = async (event, context) => {
  const result = await handler(event, context);
  return result;
};
