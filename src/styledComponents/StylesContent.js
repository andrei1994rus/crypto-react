import styled from 'styled-components';


const StylesContent=styled.div
`

	.div_notFound_Content
	{
		margin-top:3%;
		margin-left:3%;
	}

	.div_home_content
	{
		margin-top:3%;
		margin-left:3%;
		width:90%;

		@media(min-width:1001px)
		{
			margin-left:40px;
			margin-top:40px;
			width:95%;
		}

		@media(max-height:399px)
		{
			margin-top:1%;
			margin-left:3%;
		}
	}

	.div_findCrypto_content
	{
		margin-top:3%;
		margin-left:3%;
		width:97%;

		@media(min-width:1001px)
		{
			margin-left:40px;
			margin-top:40px;
		}

		@media(max-height:399px)
		{
			margin-top:1%;
			width:97%;
			margin-left:3%;
		}
	}

	.div_listCrypto_content
	{
		margin-top:3%;
		margin-left:3%;
		width:97%;

		@media(min-width:1001px)
		{
			margin-left:40px;
			margin-top:40px;
		}

		@media(max-height:399px)
		{
			margin-top:1%;
			width:98%;
			margin-left:3%;
		}
	}
	
`;

export default StylesContent;