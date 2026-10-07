export const upperSymbol = (symbol: string) => symbol.toUpperCase();
export const cleanDate = (dateString: string) =>
  dateString
    .replace(/[a-zA-Z]/g, ' ')
    .replace('.000', ' ')
    .trim();

export const iterationsInObject = (obj: {
  [x: string]: { [x: string]: string };
}) => {
  for (let k in obj) {
    if (obj[k] instanceof Object) {
      obj[k]['symbol'] = upperSymbol(obj[k]['symbol']);
    }
  }
};

export const jsonResponse = (data: unknown, site: string, status = 200) => {
  console.log('jsonResponse:' + JSON.stringify(data));

  const corsHeaders = {
    'Access-Control-Allow-Origin': `${site}`,
    'Content-Type': 'application/json; charset=utf-8',
  };

  return new Response(JSON.stringify(data), {
    status,
    headers: corsHeaders,
  });
};
