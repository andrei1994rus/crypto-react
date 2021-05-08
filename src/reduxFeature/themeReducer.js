import {LOAD_THEME} from './types';

const default_state=
{
	isDark:false
};

export default function themeReducer(state=default_state,action)
{
	if(action.type===LOAD_THEME)
	{
		let isDark=false;
		if(JSON.parse(localStorage.getItem('isDark')))
		{
			isDark=JSON.parse(localStorage.getItem('isDark'));
			return {
				isDark:isDark
			};

		}
		return default_state;
	}

	return state;
};