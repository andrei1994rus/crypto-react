import React,{useContext,useEffect} from 'react';

import {useSelector} from 'react-redux';

import ListContext from './listContext';
import StylesTable from '../styledComponents/StylesTable';

const TableListCrypto=()=>
{
	const {items}=useContext(ListContext);
	const isDark=useSelector(state=>state.theme_redux.isDark);

	useEffect(()=>
	{
		let first_rows=document.querySelectorAll('.first_grid > div');
		let other_rows=document.querySelectorAll('.grid > div');
		
		if(isDark)
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
	},[isDark]);

	return(
		<StylesTable>
			<div className="full_grid"> 
			    <div className="first_grid">
					<div className="first_grid-item-id">Id</div>
					<div className="first_grid-item-fullName">Full name</div>
					<div className="first_grid-item-payingEnabled">Paying enabled?</div>
					<div className="first_grid-item-crypto">Crypto?</div>
					<div className="first_grid-item-payoutFee">Payout Fee</div>
				</div>
			    {items.map((item,index)=>
			        (
			        	<div className="grid" key={index}>
				        	<div className="grid-item-id">{item.id}</div>
							<div className="grid-item-fullName">{item.fullName}</div>
							<div className="grid-item-payingEnabled">{item.payinEnabled ? "yes" : "no"}</div>
							<div className="grid-item-crypto">{item.crypto ? "yes" : "no"}</div>
							<div className="grid-item-payoutFee">{item.payoutFee ? item.payoutFee : "unknown"}</div>
						</div>
			        )
			    )}
		    </div>
	    </StylesTable>
    );
}

export default TableListCrypto;