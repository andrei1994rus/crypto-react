// Code of backend (Supabase) was written in Edge Functions editor
import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import { createClient } from 'jsr:@supabase/supabase-js@2';
import { jsonResponse, getSingleCurrency, getListCurrency } from './utils.ts';

Deno.serve(async (req: Request) => {
  const key = Deno.env.get('KEY');
  const mySite = Deno.env.get('MY_SITE');

  const origin = req.headers.get('origin');
  console.log('origin: ' + origin);

  if (origin && origin !== mySite) {
    return jsonResponse('FORBIDDEN 403', '*', 403);
  }

  console.log('url: ' + req.url);
  const url = new URL(req.url);
  const pathParts = url.pathname.split('/').filter(Boolean);

  const currencyIndex = pathParts.lastIndexOf('currency');
  const symbol = pathParts[currencyIndex + 1];
  console.log(`symbol: ${symbol}`);

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL'),
      Deno.env.get('SUPABASE_ANON_KEY')
    );

    if (url.pathname === `/api-crypto-service/currency/${symbol}`) {
      return getSingleCurrency(symbol, key, mySite, supabase);
    } else if (url.pathname === '/api-crypto-service/currency') {
      return getListCurrency(key, mySite, supabase);
    }
  } catch (err) {
    console.log('Error: ' + err.message);
    return jsonResponse(err.message, '*', 500);
  }

  return jsonResponse(`Page ${url.pathname} is not found`, '*', 404);
});
