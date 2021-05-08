import styled from 'styled-components';

const StylesHeader=styled.div
`
	#page_header
	{
		position:absolute;

		@media(min-width:1001px)
		{
			position:static;
		}
		
		@media(max-height:399px)
		{
			position:static;
		}
	}
`;

export default StylesHeader;