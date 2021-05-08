import React,{useEffect,useState} from 'react';
import {HashRouter as Router,Switch,Route} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {loadTheme} from './reduxFeature/actions';

import NavigationBar from './components/NavigationBar';
import SwitchTheme from './components/SwitchTheme';

import Home from './pages/Home';
import ListCrypto from './pages/listCrypto';
import FindCrypto from './pages/FindCrypto';
import NotFound from './pages/notFound';

import StylesContent from './styledComponents/StylesContent';

const stickyTopStyle=
{
	div:
	{
		position:"sticky",
		top:'0px',
		zIndex:'2',
	}
};

const paddingStyle=
{
	div:
	{
		paddingTop:'0px',
	}
};

const contentStyle=
{
	div:
	{
		zIndex:'1',
	}
};

const App=()=>
{
	const isDark=useSelector(state=>state.theme_redux.isDark);
	const [isLoaded,setIsLoaded]=useState(false);
	const dispatch=useDispatch();

	useEffect(()=>
	{
		if(localStorage.getItem('isDark'))
    	{
    		dispatch(loadTheme());
    		setIsLoaded(true);
    	}
    	else
    	{
    		setIsLoaded(true);
    	}
	},[dispatch]);


	return(
		<Router>
		  	<div className="div_sticky_top" style={stickyTopStyle.div}>
		  		<NavigationBar/> 
		  	</div>
		  	<div className="div_switchTheme">
		  		{isLoaded &&
		  			<SwitchTheme isDark={isDark ? isDark : false}/>
		  		}
		  	</div>
		  	<div className="div_padding" style={paddingStyle.div}></div>
		  	<div className="div_index_content" style={contentStyle.div}>
			  	<StylesContent>
			  		<Switch>
			  			<Route path="/" exact component={Home}/>
			  			<Route path="/list_crypto" exact component={ListCrypto}/>
			  			<Route path="/find_crypto" exact component={FindCrypto}/>
			  			<Route component={NotFound}/>
			  		</Switch>
			  	</StylesContent>
		  	</div>
	  	</Router>
	);
}

export default App;