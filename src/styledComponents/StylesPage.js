import styled from 'styled-components';

const StylesPage=styled.div
`
	:root
	{
		padding-button:10%;
	}

	.link, .nav_item
	{
		color:red;
		font-weight:900;
		font-style:italic;
		font-size:80%;

		@media(min-width:1001px)
		{
			position:static;
			font-size:110%;
			top:0;
		}

		@media(max-height:400px)
		{
			position:static;
			top:0;
			font-size:100%;
		}
	}

	.div_list
	{
		position:relative;
		top:50px;
		font-size:80%;

		@media(min-width:1001px)
		{
			position:static;
			font-size:170%;
			top:0;
		}

		@media(max-height:400px)
		{
			position:static;
			top:0;
			font-size:100%;
		}
	}

	.div_text p 
	{
		position:relative;
		top:50px;
		font-size:80%;

		@media(min-width:1001px)
		{
			position:static;
			font-size:200%;
			top:0;
		}

		@media(max-height:400px)
		{
			position:static;
			top:0;
			font-size:100%;
		}
	}

	.div_listCrypto_loading
	{
		display:flex;
		justify-content:center;
		align-items:center;
		positon:relative;
		padding:50px;
		top:50px;

		@media(min-width:1001px)
		{
			position:static;
			padding:0;
			top:0;
		}

		@media(max-height:399px)
		{
			position:static;
			padding:0;
			top:0;
		}
	}

	.div_findCrypto_loading
	{
		position:static;
		float:right;
		padding:0 10% 0 0;
		top:0;

		@media(min-width:1001px)
		{
			padding:0 50% 0 0;
			top:0;
		}

		@media(max-height:500px)
		{
			padding:0 50% 0 0;
			top:0;
		}
	}

	.div_errorMessage
	{
		positon:relative;
		padding-top:50px;
		top:50px;

		@media(min-width:1001px)
		{
			padding-top:0;
			top:0;
		}

		@media(max-height:399px)
		{
			position:static;
			top:0;
			padding-top:0;
		}
	}

	.form
	{
		position:relative;
		top:50px;

		@media(min-width:1001px)
		{
			position:static;
			top:0;
		}

		@media(max-height:399px)
		{
			position:static;
			top:0;
		}
	}

	#btn
	{
		margin-top:10px;
		display:flex;
		background-color:blue;
		border:5px solid blue;
		color:white;
		transition:1.25s;
	}

	#btn:hover
	{
	  	background-color:green;
	  	border:5px solid green;
	  	padding:0 calc(var(--padding-button)+13%);
	  	box-shadow: 0 0 .90em .90em green;

	  	@media(min-width:1001px)
	  	{
	  		padding:0 calc(var(--padding-button)+15%);
	  	}
	}

	.form input
	{
		outline:none;
		border:5px solid blue;
		transition:1s;
	}

	.form input:focus
	{
		border:5px solid green;
	}

	.div_home_footer
	{
		color:white;
		background-color:#343a40;
		position:fixed;
		width:100%;
		bottom:0;
	}

	.div_findCrypto_footer
	{
		color:white;
		background-color:#343a40;
		position:fixed;
		width:100%;
		bottom:0;
	}

	.div_listCrypto_footer
	{
		color:white;
		background-color:#343a40;
		position:fixed;
		width:100%;
		bottom:0;
	}
	
	#footer_text
	{
		display:flex;
		justify-content:center;
		font-size:110%;

		@media(min-width:1001px)
		{
			font-size:300%;
		}
	}

	.link_api
	{
		margin-left:5px;
	}
	
	.div_listCrypto_margin
	{
		margin-top:29%;

		@media(min-width:1001px)
		{
			margin-top:7%;
		}

		@media(max-height:399px)
		{
			margin-top:20%;
		}
	}
`;

export default StylesPage;