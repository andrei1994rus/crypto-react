import React,{createRef,Component} from 'react';

import StylesPage from '../styledComponents/StylesPage';

import headerPage from '../components/headerPage';
import Loading from '../components/Loading';
import CryptoModal from '../components/cryptoModal';
import ErrorModal from '../components/errorModal';

import ItemContext from '../components/itemContext';
import ErrorContext from '../components/errorContext';

class FindCrypto extends Component
{
	constructor(props)
	{
	    super(props);

	    this.resetState=()=>
	    { 	
	    	this.setState(
	    	{
	    		cryptoInfo:{},
		    	error:"",
		    	isLoaded:true
	    	});
	    };
	    
	    this.state=
	    {
	    	cryptoInfo:{},
	    	error:"",
	    	isLoaded:true
	    };

	    this.handleSubmit=this.handleSubmit.bind(this);
	    this.input=createRef();
    }

    handleSubmit=async event=>
    {
    	console.group("handleSubmit");
    	event.preventDefault();
    	let json_data;
    	let errorMessage;
    	this.setState(
    	{
    		isLoaded:false,
    		error:""
    	});

    	try
    	{
    		if(!this.input.current.value)
    		{
    			errorMessage="Empty input!";
    			throw new Error(errorMessage);
    		}
    		
    		let data=await fetch(`/currency/${this.input.current.value}`);
    		console.log(data);
    		console.log("status:"+data.status);
    		
    		if(data.status!==200)
    		{
				errorMessage=data.statusText+" "+data.status+"!";
    			throw new Error(errorMessage);
    		}
    		
			json_data=await data.json();
    		console.log(json_data);
    	}

    	catch(e)
    	{
    		console.error(e);
    	}

    	finally
    	{
    		if(json_data)
    		{
    			if(json_data.error)
    			{
    				let advice='Go to page List Crypto, to get list of all available currencies.';
    				let errorMessage=`${json_data.error.message}. ${advice}`;
	    			
	    			console.log(json_data.error);
	    			console.log(errorMessage);
	    			
	    			this.setState(
	    			{
	    				cryptoInfo:{},
	    				error:errorMessage,
	    				isLoaded:true
	    			});
    			}
    			
    			else
    			{
	    			this.setState(
	    			{
	    				cryptoInfo:
	    				{
	    					id:json_data.id,
	    					fullName:json_data.id,
	    					payinEnabled:json_data.payinEnabled,
	    					crypto:json_data.crypto,
	    					payoutFee:json_data.payoutFee
	    				},
	    				error:"",
	    				isLoaded:true
	    			});
    			}
    		}
    		
    		else if(errorMessage)
    		{
    			console.log(errorMessage);
    			this.setState(
	    		{
	    			cryptoInfo:{},
	    			error:errorMessage,
	    			isLoaded:true
	    		});
    		}

    		this.input.current.value="";
    		console.groupEnd();
    	}
    }

	render=()=>
	{
		const {cryptoInfo,error,isLoaded}=this.state;
		return(
			<StylesPage>
				<div className="div_findCrypto_content">
					<header>
						{headerPage("Find crypto.")}
					</header>
					{!isLoaded && 
						<div className="div_findCrypto_loading">
							<Loading/>
						</div>
					}  
					<form className="form" onSubmit={this.handleSubmit}>
						<input type="text" ref={this.input} placeholder="input symbol of currency"/>
						<button id="btn" type="submit">Submit</button>
					</form>	
					{cryptoInfo.id &&
						<div>
							<ItemContext.Provider value={{cryptoInfo:cryptoInfo,resetState:this.resetState}}>
								<CryptoModal/>
							</ItemContext.Provider>
						</div>
					}
					{error &&
						<div>
							<ErrorContext.Provider value={{error:error,resetState:this.resetState}}>
								<ErrorModal/>
							</ErrorContext.Provider>
						</div>
					}
				</div>
				
			</StylesPage>
		);
	}
}

export default FindCrypto;