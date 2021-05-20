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
  font-size:20px;
  align-items:center;

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
  	color:hsla(0,0%,100%,.5);
  	margin-left:10px;
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
                            <Navbar.Brand>Crypto on React</Navbar.Brand>
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