import styled from 'styled-components';


const StylesContent=styled.div
`
	.div_notFound_Content
	{
		padding-top:3%;
		padding-left:3%;
	}

	.div_home_content
	{
		padding-top:3%;
		padding-left:3%;

		@media(min-width:1024px)
		{
			padding-left:10px;
			padding-top:40px;
		}
	}

	.div_findCrypto_content
	{
		padding-left:3%;
		padding-top:3%;
		width:97%;

		@media(min-width:1024px)
		{
			padding-left:10px;
			padding-top:40px;
		}
	}

	.div_listCrypto_content
	{
		padding-top:3%;
		padding-left:3%;
		width:97%;

		@media(min-width:1024px)
		{
			padding-left:10px;
			padding-top:40px;
			width:97%;
		}
	}
	
`;

export default StylesContent;