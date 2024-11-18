const express = require('express');
const path = require('path');
const request = require('request');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;

const ServerlessHttp = require('serverless-http');

app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname, 'build')));

const roundPayouFeeAfterComma = (payoutFee) => {
  let roundedPayoutFee = (payoutFee * 1e8) / 1e8;
  let countAfterComma = roundedPayoutFee.toString().split('.')[1]?.length;

  return Number.isInteger(roundedPayoutFee)
    ? roundedPayoutFee.toFixed(1)
    : countAfterComma > 8
    ? '~' + roundedPayoutFee.toFixed(8)
    : roundedPayoutFee;
};

function iterationsInObject(obj) {
  for (let k in obj) {
    if (obj[k] instanceof Object) {
      obj[k]['payoutFee'] = roundPayouFeeAfterComma(obj[k]['payoutFee']);
    }
  }
}

app.use('/.netlify/functions/api/getList', async (req, res) => {
  console.log(`path:${req.url}`);
  request(
    'https://api.hitbtc.com/api/2/public/currency/',
    (error, response, body) => {
      if (!error) {
        let parsedBody = JSON.parse(body);

        iterationsInObject(parsedBody);

        res.send(parsedBody);
      }
    }
  );
});

app.use('/.netlify/functions/api/currency/:id', async (req, res) => {
  console.log(`path:${decodeURIComponent(req.url)}`);
  console.log(`id:${req.params.id}`);
  console.log(`statusCode:${res.statusCode}`);
  fetch(`https://api.hitbtc.com/api/2/public/currency/${req.params.id}`)
    .then((resp) => resp.json())
    .then((json) => {
      if (json['payoutFee']) {
        json['payoutFee'] = roundPayouFeeAfterComma(json['payoutFee']);
      }

      res.send(json);
    });
});

app.listen(port, () => console.log(`Server is running in ${port}`));

const handler = ServerlessHttp(app);

module.exports.handler = async (event, context) => {
  const result = await handler(event, context);
  return result;
};
