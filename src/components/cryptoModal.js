import React,{useState,useContext} from 'react';
import {Modal} from 'react-bootstrap';

import StylesModal from '../styledComponents/StylesModal';
import ItemContext from './itemContext';

import headerPage from './headerPage';

const CryptoModal=()=>
{
	const [showModal,setShowModal]=useState(true);
	const {cryptoInfo}=useContext(ItemContext);
	const {resetState}=useContext(ItemContext);

	const hide=()=>
	{
		resetState();
		setShowModal(false);
	}

	return(
		<Modal show={showModal} onHide={hide} size="md" centered>
			<Modal.Header closeButton>
				<StylesModal>
					<Modal.Title id="title">
						{headerPage("INFO!")}
				    </Modal.Title>
			    </StylesModal>
		    </Modal.Header>
		    <Modal.Body>
		        <StylesModal>
					<span>Crypto info:</span>
					<ul>
						<li>id-{cryptoInfo.id};</li>
						<li>fullName-{cryptoInfo.fullName};</li>
						<li>is paying enabled?-{cryptoInfo.payinEnabled ? "yes" : "no"};</li>
						<li>is crypto?-{cryptoInfo.crypto ? "yes" : "no"};</li>
						<li>payoutFee-{cryptoInfo.payoutFee ? cryptoInfo.payoutFee : "unknown"}.</li>
					</ul>
				</StylesModal>
			</Modal.Body>
		</Modal>
	);
}

export default CryptoModal;