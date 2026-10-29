const upperSymbol = (symbol: string) => symbol.toUpperCase();
const cleanDate = (dateString: string) =>
  dateString
    .replace(/[a-zA-Z]/g, ' ')
    .replace('.000', ' ')
    .trim();

export const jsonResponse = (data: unknown, site: string, status = 200) => {
  console.log('jsonResponse: ' + data);

  const corsHeaders = {
    'Access-Control-Allow-Origin': `${site}`,
    'Content-Type': 'application/json; charset=utf-8',
  };

  return new Response(JSON.stringify(data), {
    status,
    headers: corsHeaders,
  });
};

const CACHE_TTL = 120_000; //2 min=120 sec

const getCache = async (key: string, supabase: any) => {
  try {
    const filter = key === 'list' ? 'list' : key;
    const { data, error } = await supabase
      .from('kv_store')
      .select('*')
      .eq('key', filter)
      .single();

    if (error) {
      console.log('Error: ' + error.message);
      return null;
    }

    if (
      new Date(Date.now()).getTime() - new Date(data.created_at).getTime() >
      CACHE_TTL
    ) {
      const { error } = await supabase.rpc('delete');
      if (error) {
        console.log('Error: ' + error.message);
      }

      return null;
    }

    return data.data;
  } catch (e) {
    console.log('Error: ' + e.message);
  }

  return null;
};

const setCache = async (key: string, value: any, supabase: any) => {
  const { data, error } = await supabase
    .from('kv_store')
    .upsert([{ key: key, data: value }])
    .select();
  if (error) {
    console.log('Error: ' + error.message);
    return;
  }

  console.log('Added data: ' + data);
};

export const getSingleCurrency = async (
  symbol: string,
  key: string,
  site: string,
  supabase: any
) => {
  const lowerSymbol = symbol.toLowerCase();
  const cacheKey = `single:${lowerSymbol}`;
  const cached = await getCache(cacheKey, supabase);
  if (cached) {
    console.log('cache: ' + (cached !== null));
    return jsonResponse(cached, site, 203);
  }

  let result: any;
  const request = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&symbols=${symbol}&x_cg_demo_api_key=${key}`
  );
  console.log('status:' + request.status);

  if (!request.ok) {
    console.log('status text: ' + request.statusText);
    return jsonResponse(request, site, request.status);
  }

  const jsonData = await request.json();

  if (jsonData.length === 0) {
    console.log('404 NOT FOUND');
    return jsonResponse('404 NOT FOUND', site, 404);
  }

  result = jsonData.map((item: any) => ({
    ...item,
    symbol: upperSymbol(item.symbol),
    atl_date: cleanDate(item.atl_date),
    ath_date: cleanDate(item.ath_date),
  }))[0];
  console.log(result);

  setCache(cacheKey, result, supabase);
  return jsonResponse(result, site);
};

export const getListCurrency = async (
  key: string,
  site: string,
  supabase: any
) => {
  const cacheKey = 'list';
  const cached = await getCache(cacheKey, supabase);
  if (cached) {
    console.log('cache: ' + (cached !== null));
    return jsonResponse(cached, site, 203);
  }

  let result: any;
  const request = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=${key}`
  );
  console.log('status: ' + request.status);

  if (!request.ok) {
    console.log('status text:' + request.statusText);
    return jsonResponse(request, site, request.status);
  }

  const jsonData = await request.json();

  if (jsonData.length === 0) {
    console.log('Failed to fetch');
    return jsonResponse('Failed to fetch', site, 500);
  }

  result = jsonData.map((item: any) => ({
    symbol: upperSymbol(item.symbol),
    name: item.name,
    image: item.image,
    current_price: item.current_price,
    market_cap: item.market_cap,
  }));
  console.log(result);

  setCache(cacheKey, result, supabase);
  return jsonResponse(result, site);
};
