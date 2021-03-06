import React,{Component} from 'react';
import styled from 'styled-components';

const Label=styled.label
` 
	position:relative;
	top:3px;
	right:4%;
	float:right;
`;

const Input=styled.input
`
    position:absolute;
    left:-9999px;
    top:-9999px;

    &:checked+span
    {
    	background-color:#20c997;

    	&:before
    	{
    		left:calc(-9%);
    		transform:translateX(100%);

    		@media(min-width:1024px)
    		{
    			left:calc(1vmin*0.8);
    		}
    	}
    }
`;

const Slider=styled.span
`
  	display:flex;
  	cursor:pointer;
  	width:40px;
  	height:25px;
  	border-radius:100px;
  	background-color:#bfbfbf;
  	position:relative;
  	transition:background-color 0.2s;

  	@media(min-width:1024px)
  	{
  		width:7vmax;
  		height:5vmax;
  	}

  	&:before
	{
		content:"";
		position:absolute;
		top:2px;
		left:4px;
		width:21px;
		height:21px;
		border-radius:45px;
		transition:0.2s;
		background:#fff;

		@media(min-width:1024px)
		{
			width:3vmax;
  			height:4vmax;
		}

		@media(min-width:1024px)
    	{
    		top:calc(1vmin*0.8);
    	}
	}

	&:active:before
	{
		width:28px;
	}
`;

const TextStyle=styled.div
`
	padding-left:3%;

	@media(min-width:1024px)
	{
		padding-left:10px;
	}

	#theme
	{
		display:flex;
		font-weight:bold;
		font-size:5vh;
		padding-right:5vmax;

		@media(min-width:1024px)
		{
			font-size:6vmax;
		}
	}
`;

export default class SwitchTheme extends Component
{
	constructor(props)
	{
        super(props);
		
		this.state=
		{
			isChecked:this.props.isDark
		};

		this.handleChange=this.handleChange.bind(this);
    }

    componentDidMount=()=>
    {
    	const chb=document.getElementById("checkbox");
    	const {isChecked}=this.state;
		chb.checked=isChecked ? isChecked : false;
    	if(chb.checked)
    	{
    		const body=document.body;
			body.classList.add('dark_bg');
    	}
    }

	handleChange=()=>
	{
		this.setState(state=>
		({ 
			isChecked:!state.isChecked
		}));

		const body=document.body;
		body.classList.toggle('dark_bg');

		const chb=document.getElementById("checkbox");
		let first_rows=document.querySelectorAll('.first_grid > div');
		let other_rows=document.querySelectorAll('.grid > div');
		
		if(chb.checked)
		{
			for(let row of first_rows)
			{
				row.classList.add('dark_bg');
			}

			for(let other_row of other_rows)
			{
				other_row.classList.add('dark_bg');
			}
		}

		else
		{
			for(let row of first_rows)
			{
				row.classList.remove('dark_bg');
			}

			for(let other_row of other_rows)
			{
				other_row.classList.remove('dark_bg');
			}
		}
    }

    componentDidUpdate=()=>
    {
    	const {isChecked}=this.state;
    	localStorage.setItem('isDark',JSON.stringify(isChecked));
    }

	render=()=>
	{
		const {isChecked}=this.state;
		return(
			<div>
				<Label>
			        <Input id="checkbox" onChange={this.handleChange} type="checkbox"/>
			        <Slider/>
			    </Label>
			    <TextStyle>
			    	<span id="theme">Theme: {isChecked ? "dark" : "light"}</span>
			    </TextStyle> 
		    </div>
	    );
	}
}	
