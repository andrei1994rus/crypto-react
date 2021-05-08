import styled from 'styled-components';

const StylesTable=styled.div
` 
	.first_grid
	{
		display:grid;
		grid-template-columns:15% 20% 20% 20% 20%;
	}

	.grid
	{
		display:grid;
		grid-template-columns:15% 20% 20% 20% 20%;
	}

	.full_grid
	{
		position:relative;
		top:50px;
		display:flex;
		flex-direction:column;
		width:97%;

		@media(min-width:1001px)
		{
			position:static;
			top:0;
		}

		@media(max-height:400px)
		{
			position:static;
			top:0;
		}
	}

	.first_grid div[class~="dark_bg"]
	{
	  	border-color:white;
	}

	.grid div[class~="dark_bg"]
	{
	  	border-color:white;
	}

	.first_grid-item-id
	{
		order:1;
		font-size:75%;
		border:1px solid black;

		@media(min-width:1001px)
		{
			font-size:18pt;
		}

	}
	
	.first_grid-item-fullName
	{
		order:2;
		font-size:75%;
		border:1px solid black;
		
		@media(min-width:1001px)
		{
			font-size:18pt;
		}
	}
	
	.first_grid-item-payingEnabled
	{
		order:3;
		font-size:75%;
		border:1px solid black;
		
		@media(min-width:1001px)
		{
			font-size:18pt;
		}
	}
	
	.first_grid-item-crypto
	{
		order:4;
		font-size:75%;
		border:1px solid black;
		
		@media(min-width:1001px)
		{
			font-size:18pt;
		}
	}
	
	.first_grid-item-payoutFee
	{
		order:5;
		font-size:75%;
		border:1px solid black;
		
		@media(min-width:1001px)
		{
			font-size:18pt;
		}
	}

	.grid-item-id
	{
		grid-column-start:1;
		font-size:50%;
		border:1px solid black;

		@media(min-width:1001px)
		{
			font-size:16pt;
		}
	}

	.grid-item-fullName
	{
		grid-column-start:2;
		font-size:45%;
		border:1px solid black;

		@media(min-width:1001px)
		{
			font-size:16pt;
		}
	}

	.grid-item-payingEnabled
	{
		grid-column-start:3;
		font-size:45%;
		border:1px solid black;

		@media(min-width:1001px)
		{
			font-size:16pt;
		}
	}

	.grid-item-crypto
	{
		grid-column-start:4;
		font-size:45%;
		border:1px solid black;

		@media(min-width:1001px)
		{
			font-size:16pt;
		}
	}

	.grid-item-payoutFee
	{
		grid-column-start:5;
		font-size:30%;
		border:1px solid black;

		@media(min-width:1001px)
		{
			font-size:16pt;
		}
	}
`;

export default StylesTable;