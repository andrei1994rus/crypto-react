import styled from 'styled-components';

const StylesPage=styled.div
`
	.link, .nav_item
	{
		color:red;
		font-weight:900;
		font-style:italic;
		font-size:6vw;

		@media(min-width:1024px)
		{
			font-size:3vmax;
			top:0;
		}

		@media(min-width:1280px)
		{
			font-size:2vmax;
			top:0;
		}
	}

	.div_list
	{
		font-size:6vw;
		padding-right:5vmax;

		@media(min-width:1024px)
		{
			font-size:3vmax;
			padding:0;
		}

		@media(min-width:1280px)
		{
			font-size:2vmax;
			padding:0;
		}
	}

	.div_text p 
	{
		padding-bottom:2vh;
		font-size:6vw;
		padding-right:3.5vmax;

		@media(min-width:1024px)
		{
			font-size:3vmax;
			padding:0;
		}

		@media(min-width:1280px)
		{
			font-size:2vmax;
			padding:0;
		}
	}

	.div_listCrypto_loading
	{
		display:flex;
		justify-content:center;
		align-items:center;
		padding:1vh;

		@media(min-width:1024px)
		{
			padding:0;
		}
	}

	.div_findCrypto_loading
	{
		float:right;
		padding:0 1vh 0 0;

		@media(min-width:1024px)
		{
			padding:0 5vh 0 0;
		}
	}

	.div_errorMessage
	{
		padding-top:1vh;
		font-size:6vw;

		@media(min-width:1024px)
		{
			padding:0;
			font-size:2rem;
		}
	}

	.form
	{
		padding-top:1vh;

		@media(min-width:1024px)
		{
			position:static;
			padding:0;
		}
	}

	#btn
	{
		margin-top:2vh;
		display:flex;
		background-color:blue;
		border:5px solid blue;
		color:white;
		transition:1.25s;
		font-size:3vmax;
	}

	#btn:hover
	{
	  	background-color:green;
	  	border:5px solid green;
	  	padding:0 calc((var(--padding-button))*2.3);
	  	box-shadow: 0 0 .90em .90em green;

	  	@media(min-width:1024px)
	  	{
	  		padding:0 calc((var(--padding-button))*2.5);
	  	}
	}

	.form input
	{
		outline:none;
		width:95vw;
		font-size:3.5vh;
		border:5px solid blue;
		transition:1s;

		@media(min-width:1024px)
	  	{
	  		width:700px;
	  	}
	}

	.form input:focus
	{
		border:5px solid green;
	}

	.link_api
	{
		margin-left:5px;
	}
`;

export default StylesPage;