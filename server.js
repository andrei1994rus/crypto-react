const express=require('express');
const path=require('path');
const request=require('request');
const fetch=require('node-fetch');

const app=express();
const port=process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname,'build')));

app.get("/getList",(req,res)=>
{
	console.log(`path:${req.url}`);
	request("https://api.hitbtc.com/api/2/public/currency/",(error,response,body)=>
	{
		if(!error)
		{
			res.send(JSON.parse(body));
		}
	});
});

app.get("/currency/:id",(req,res)=>
{
	console.log(`path:${decodeURIComponent(req.url)}`);
	console.log(`id:${req.params.id}`);
	console.log(`statusCode:${res.statusCode}`);
	fetch(`https://api.hitbtc.com/api/2/public${req.url}`).then(resp=>resp.json()).then(json=>res.send(json));
});

app.listen(port,()=>console.log(`Server is running in ${port}`));