import React from 'react';
import StylesHeader from '../styledComponents/StylesHeader';

const headerPage=text=>
(
	<StylesHeader>
		<h1 id="page_header">
			{text}		
		</h1>
	</StylesHeader>
)

export default headerPage;