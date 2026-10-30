# crypto-react

---

# Functions

- Router;
- Navigation;
- Handle wrong path (404 not found);
- Animation during loading;
- Button hover effects;
- Input focus effects;
- Using form;
- Async get request;
- Handle wrong input;
- Output array to grid;
- Layout for mobile;
- Sort array with using library Lodash;
- Using styles;
- Find crypto;
- List crypto;
- Footer with information about using api and horizontal scroll;
- Horizontal scroll in page List crypto for mobile devices;
- Using api;
- CORS in backend;
- Caching with PostgreSQL.

---

# Used stack technology

- ReactJS;
- ~~NodeJS~~ Deno;
- HTML;
- JS, Typescript;
- CSS, CSS3;
- Libraries: Bootstrap, React-Bootstrap, React-Router-Dom, React-Redux, Redux, Styled Components, Redux-Devtools-Extension, Redux-Thunk, Material-UI, Lodash, Supabase ~~Express~~;
- [Backend](https://github.com/andrei1994rus/crypto-react/tree/master/api-crypto-service): Supabase;
- Caching: PostgreSQL (built into Supabase);
- Test library Jest;
- Method: Mobile First;
- Api: [coingecko-api](https://github.com/coingecko/coingecko-api-oas).

---

# Backend

Supabase has Edge Functions and PostgreSQL and uses Deno. Backend code was written in Edge Functions editor. Backend uses caching with PostgreSQL: holds cache in 2 minutes and deletes cache. If backend doesn't hold cache, backend uses request to API. Backend uses CORS:

```javascript
const origin = req.headers.get('origin');
if (origin && origin !== mySite)
{
  return jsonResponse('FORBIDDEN 403', '*', 403);
}
```

```javascript
const jsonResponse = (data: unknown, site: string, status = 200) => 
{
  const corsHeaders = 
  {
    'Access-Control-Allow-Origin': `${site}`,
    'Content-Type': 'application/json; charset=utf-8',
  };

  return new Response(JSON.stringify(data), {
    status,
    headers: corsHeaders,
  });
};
```

---

# Create table

Code of creating table is in table.sql. Table was created without RLS (Row Level Security).

# Delete data

Code of deletion data is in delete.sql. This code is function (RPC) in Supabase and deletes data if data were created >2 minutes before execution. Deletion data is triggered by this code:

```javascript
if (new Date(Date.now()).getTime() - new Date(data.created_at).getTime() > CACHE_TTL)
{
  const { error } = await supabase.rpc('delete');
  if (error)
  {
    console.log('Error: ' + error.message);
  }
}
```

--- 

[URL](https://andrei1994rus.github.io/crypto-react/) .