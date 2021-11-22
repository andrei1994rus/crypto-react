import styled from 'styled-components';

const StylesTable=styled.div
` 
	.first_grid
	{
		display:grid;
		text-align:center;
		grid-template-columns:200px 250px 35vw 35vw 35vmax;

		@media(min-width:1024px)
		{
			grid-template-columns:25% 25% 15% 15% 20%;
		}
	}

	.grid
	{
		display:grid;
		text-align:center;
		grid-template-columns:200px 250px 35vw 35vw 35vmax;

		@media(min-width:1024px)
		{
			grid-template-columns:25% 25% 15% 15% 20%;
		}
	}

	.full_grid
	{
		position:relative;
		top:13vmax;
		
		overflow-x:scroll;

		@media(min-width:1024px)
		{
			position:static;
			top:0;
			overflow-x:hidden;
		}
	}

	.first_grid div[class~="dark_bg"], .grid div[class~="dark_bg"]
	{
	  	border-color:white;
	}

	.first_grid-item-id
	{
		order:1;
		font-size:calc(2.8vmax*1.1);

		border-top:2px solid black;
		border-bottom:1px solid black;
		border-left:2px solid black;
		border-right:1px solid black;

		@media(min-width:1024px)
		{
			font-size:calc(2.2vmax*1.2);
		}
	}
	
	.first_grid-item-fullName
	{
		order:2;
		font-size:calc(2.8vmax*1.1);
		border-top:2px solid black;
		border-bottom:1px solid black;
		border-left:1px solid black;
		border-right:1px solid black;
		
		@media(min-width:1024px)
		{
			font-size:calc(2.2vmax*1.2);
		}
	}
	
	.first_grid-item-payingEnabled
	{
		order:3;
		font-size:calc(2.8vmax*1.1);
		border-top:2px solid black;
		border-bottom:1px solid black;
		border-left:1px solid black;
		border-right:1px solid black;
		
		@media(min-width:1024px)
		{
			font-size:calc(2.2vmax*1.2);
		}
	}
	
	.first_grid-item-crypto
	{
		order:4;
		font-size:calc(2.8vmax*1.1);
		border-top:2px solid black;
		border-bottom:1px solid black;
		border-left:1px solid black;
		border-right:1px solid black;
		
		@media(min-width:1024px)
		{
			font-size:calc(2.2vmax*1.2);
		}
	}
	
	.first_grid-item-payoutFee
	{
		order:5;
		font-size:calc(2.8vmax*1.1);
		border-top:2px solid black;
		border-bottom:1px solid black;
		border-left:1px solid black;
		border-right:1px solid black;
		
		@media(min-width:1024px)
		{
			font-size:calc(2.2vmax*1.2);
		}
	}

	.grid-item-id
	{
		grid-column-start:1;
		font-size:calc(2.8vmax*1.1);
		border-top:1px solid black;
		border-bottom:1px solid black;
		border-left:2px solid black;
		border-right:1px solid black;

		@media(min-width:1024px)
		{
			font-size:2.1vmax;
		}
	}

	.grid-item-fullName
	{
		grid-column-start:2;
		font-size:calc(2.8vmax*1.1);
		border-top:1px solid black;
		border-bottom:1px solid black;
		border-left:1px solid black;
		border-right:1px solid black;
		padding:0 20px;

		@media(min-width:1024px)
		{
			font-size:2.1vmax;
		}
	}

	.grid-item-payingEnabled
	{
		grid-column-start:3;
		font-size:calc(2.8vmax*1.1);
		border-top:1px solid black;
		border-bottom:1px solid black;
		border-left:1px solid black;
		border-right:1px solid black;

		@media(min-width:1024px)
		{
			font-size:2.1vmax;
		}
	}

	.grid-item-crypto
	{
		grid-column-start:4;
		font-size:calc(2.8vmax*1.1);
		border-top:1px solid black;
		border-bottom:1px solid black;
		border-left:1px solid black;
		border-right:1px solid black;

		@media(min-width:1024px)
		{
			font-size:2.1vmax;
		}
	}

	.grid-item-payoutFee
	{
		grid-column-start:5;
		font-size:calc(2.8vmax*1.1);
		border-top:1px solid black;
		border-bottom:1px solid black;
		border-left:1px solid black;
		border-right:2px solid black;

		@media(min-width:1024px)
		{
			font-size:2.1vmax;
		}
	}

	.grid:last-child *:is(.grid-item-fullName, .grid-item-payingEnabled, .grid-item-crypto)
	{
		border-bottom:2px solid black;
	}

	.grid:last-child *:is(.grid-item-id)
	{
		border-bottom:2px solid black;
	}

	.grid:last-child *:is(.grid-item-payoutFee)
	{
		border-bottom:2px solid black;
	}

	.grid:last-child *[class~="dark_bg"]
	{
    	border-color:white;
	}
`;

export default StylesTable;