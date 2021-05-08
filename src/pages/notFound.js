import React from 'react';
import headerPage from '../components/headerPage';

import StylesPage from '../styledComponents/StylesPage';

const notFound=()=>
(
	<StylesPage>
		<div className="div_notFound_Content">
			{headerPage("404 NOT FOUND!")}
		</div>
	</StylesPage>
)

export default notFound;