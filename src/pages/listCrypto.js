import React,{useState,useEffect} from 'react';

import StylesPage from '../styledComponents/StylesPage';

import headerPage from '../components/headerPage';
import Loading from '../components/Loading';
import TableListCrypto from '../components/tableListCrypto';
import ErrorMessage from '../components/ErrorMessage';

import ListContext from '../components/listContext';

import getData from '../functions/getData';

import {sortBy} from 'lodash';

const ListCrypto=()=>
{
	const [error,setError]=useState(null);
  	const [isLoaded,setIsLoaded]=useState(false);
  	const [items,setItems]=useState([]);

	useEffect(()=>
	{
		getData("/.netlify/functions/api/getList/")
			.then(res=>
			{
				if(res.status!==200)
				{
					throw new Error(res.statusText+" "+res.status+"!");
				}

				return res.json();
			})
			.then(result=>
				{
					setIsLoaded(true);
					result=sortBy(result,'id');
					setItems(result);
				},
        		error=>
        		{
        			setIsLoaded(true);
        			setError(error);
        		}
        	)
	},[]);

	useEffect(()=>
	{
		if(items.length>0)
		{
			console.log("crypto_list:",...items);
		}
	},[items]);

	return(
		<StylesPage>
			<div className="div_listCrypto_content">
				<header>
					{headerPage("List crypto.")}
				</header>
				{!isLoaded && 
					<div className="div_listCrypto_loading">
						<Loading/>
					</div>
				}
				{error && 
					<div className="div_errorMessage">
						<ErrorMessage message={error.message}/>
					</div>
				} 
				{items.length>0 &&
					<ListContext.Provider value={{items}}>
						<TableListCrypto/>
					</ListContext.Provider>	
				}
			</div>
		</StylesPage>
	);
}

export default ListCrypto;