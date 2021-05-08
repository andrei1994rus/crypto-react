import React from 'react';

import {Typography} from '@material-ui/core';

const navItemText=text=>
(
	<span>
		<Typography className="nav_item" variant="caption">
			{text}
		</Typography>
	</span>
)

export default navItemText;