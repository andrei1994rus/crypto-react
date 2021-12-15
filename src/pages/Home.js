import React,{Component} from 'react';

import {Typography} from '@material-ui/core';

import StylesPage from '../styledComponents/StylesPage';

import linkText from '../components/linkText';
import navItemText from '../components/navItemText';

import headerPage from '../components/headerPage';

const links=["/list_crypto","/find_crypto"];

class Home extends Component
{
	render=()=>
	(
		<StylesPage>
			<div className="div_home_content">
				<header>
					{headerPage("Home page.")}
				</header>
				<div className="div_text">
					<Typography variant="body1">
						This app is dedicated to crypto. This app can:
					</Typography>
				</div>
				<div className="div_list">
					<ul>
						<li>
							output list crypto-go to {linkText(links[0])} or click navigation item {navItemText("List crypto")};
						</li>
						<li>
							find crypto-go to {linkText(links[1])} or click navigation item {navItemText("Find crypto")}.
						</li>
					</ul>
				</div>
			</div>
		</StylesPage>
	)
}

export default Home;