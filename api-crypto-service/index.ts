// Code of backend (Supabase) was written in Edge Functions editor
import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import {
  cleanDate,
  upperSymbol,
  iterationsInObject,
  jsonResponse,
} from './utils.ts';

Deno.serve(async (req: Request) => {
  const key = Deno.env.get('KEY');
  const mySite = Deno.env.get('MY_SITE');

  const origin = req.headers.get('origin');
  console.log('origin: ' + origin);

  if (origin) {
    console.log('origin=my site: ' + origin === mySite);
    if (origin !== mySite) {
      return jsonResponse('FORBIDDEN 403', '*', 403);
    }
  }

  console.log('url: ' + req.url);
  const url = new URL(req.url);
  let result: any;
  const pathParts = url.pathname.split('/').filter(Boolean);
  console.log(pathParts);

  const currencyIndex = pathParts.lastIndexOf('currency');
  const symbol = pathParts[currencyIndex + 1];
  console.log(`symbol: ${symbol}`);

  if (url.pathname === `/api-crypto-service/currency/${symbol}`) {
    try {
      const request = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&symbols=${symbol}&x_cg_demo_api_key=${key}`
      );
      console.log('OK:' + request.ok);
      console.log('status:' + request.status);

      if (!request.ok) {
        console.log('status text:' + request.statusText);
        return jsonResponse(request, mySite, request.status);
      }

      const jsonData = await request.json();

      if (Object.keys(jsonData).length === 0) {
        throw new Error('404 NOT FOUND');
      }

      result = jsonData[0];
      result['atl_date'] = cleanDate(result['atl_date']);
      result['ath_date'] = cleanDate(result['ath_date']);
      result['symbol'] = upperSymbol(result['symbol']);
      console.log(result);
    } catch (err) {
      console.log(err.message);
      const status = err.message === '404 NOT FOUND' ? 404 : 500;
      return jsonResponse(err.message, mySite, status);
    }

    return jsonResponse(result, mySite);
  } else if (url.pathname === '/api-crypto-service/currency') {
    try {
      const request = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=${key}`
      );
      console.log('OK:' + request.ok);
      console.log('status:' + request.status);

      if (!request.ok) {
        console.log('status text:' + request.statusText);
        return jsonResponse(request, mySite, request.status);
      }

      const jsonData = await request.json();

      if (Object.keys(jsonData).length === 0) {
        throw new Error('Failed to fetch');
      } else {
        iterationsInObject(jsonData);
        console.log(jsonData);
        result = jsonData;
      }
    } catch (err) {
      console.log(err.message);
      return jsonResponse(err.message, mySite, 500);
    }

    return jsonResponse(result, mySite);
  }

  return jsonResponse(`Page ${url.pathname} is not found`, '*', 404);
});
