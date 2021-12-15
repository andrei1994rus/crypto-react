import React,{Component} from 'react';
import {Container,Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {navigationBarData} from './navigationBarData';

import styled from 'styled-components';

const array=Array.from(navigationBarData);

const Styles=styled.header
`
  diplay:flex;
  flex-direction:row;
  align-items:center;

  #navbar-brand
  {
  	font-weight:bold;
  	font-size:4vmax;
  	padding-right:calc(2vmax*0.80);
  	color:white;

  	@media(min-width:1024px)
  	{
		font-size:5vmax;
  	}
  }

  .a 
  {
  	color:transparent;
  	text-decoration:none;
  }

  .list_navbar
  {
  	display:flex;
    flex-wrap:wrap;
    margin:0;
    padding:0;
    list-style-type:none;
  }

  .list_navbar a
  {
  	text-decoration:none;
  	font-size:3vmax;
  	color:hsla(0,0%,100%,.5);
  	margin-left:15px;

  	@media(min-width:1024px)
  	{
		font-size:4vmax;
  	}
  }

  .list_navbar a[class~="active"]
  {
  	color:white;
  	text-decoration:none;
  }
`;


class NavigationBar extends Component
{
	render=()=>
	{
		return(
			<div>
                <Container fluid="true">
                    <Styles>
                        <Navbar expand="sm" bg="dark" variant="dark">
                            <span id="navbar-brand">Crypto on React</span>
                            <Navbar.Toggle aria-controls="navbar-nav"/>
                            <Navbar.Collapse id="navbar-nav">
                                <ul className="list_navbar">
                                	{array.map((item,index)=>
                                		(
                                			<li key={index}>
                                				<NavLink 
	                                				to={item.path} 
	                                				exact 
	                                				id={item.className}>{item.text}</NavLink>
                                			</li>
                                		))
                                	}
                                </ul>
                            </Navbar.Collapse>
                        </Navbar>
                    </Styles>
                </Container>
            </div>   
		);
	}
}

export default NavigationBar;