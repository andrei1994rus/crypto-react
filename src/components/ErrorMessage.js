import React,{Component} from 'react';

class ErrorMessage extends Component
{
	constructor(props)
	{
		super(props);
		this.state=
		{
			message:undefined
		}
	}

	componentDidMount=()=>
	{
		console.log("componentDidMount");
		this.setState(
		{
			message:this.props.message
		});
	}

	componentWillUpdate=(nextProps,nextState)=>
	{
		console.group("componentWillUpdate");
		if(nextProps.message!==nextState.message)
		{
			console.log("nextProps.message!==nextState.message");
			this.setState(
			{
				message:this.props.message
			});
		}
		
		else if(nextProps.message===nextState.message)
		{
			console.log("nextProps.message===nextState.message");
		}
		console.groupEnd();
	}

	render=()=>
	{
		const {message}=this.state;
		return(
			<div>
				Error: {message}
			</div>
		);
		
	}
}

export default ErrorMessage;