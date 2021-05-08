import React from 'react';

import {Typography} from '@material-ui/core';

const linkText=text=>
(
	<span>
		<Typography className="link" variant="caption">
			{text}
		</Typography>
	</span>
)

export default linkText;