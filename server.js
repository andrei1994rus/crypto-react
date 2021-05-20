const express=require('express');
const path=require('path');
const request=require('request');

const app=express();
const port=process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname,'build')));

app.get("/getList",(req,res)=>
{
	console.log("path- /getList");
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
	console.log("path- /currency/:id");
	console.log(`id:${req.params.id}`);
	console.log(`statusCode:${res.statusCode}`);
	request(`https://api.hitbtc.com/api/2/public/currency/${req.params.id}`,(error,response,body)=>
	{
		if(!error)
		{
			res.send(JSON.parse(body));
		}
	});
});

app.listen(port,()=>console.log(`Server is running in ${port}`));