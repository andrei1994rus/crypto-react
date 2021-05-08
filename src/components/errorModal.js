import React,{useState,useContext} from 'react';
import {Modal} from 'react-bootstrap';

import StylesModal from '../styledComponents/StylesModal';
import ErrorMessage from '../components/ErrorMessage';
import ErrorContext from './errorContext';

import headerPage from './headerPage';

const ErrorModal=()=>
{
	const [showModal,setShowModal]=useState(true);
	const {error}=useContext(ErrorContext);
	const {resetState}=useContext(ErrorContext);

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
						{headerPage("ERROR!")}
				    </Modal.Title>
			    </StylesModal>
		    </Modal.Header>
		    <Modal.Body>
		        <StylesModal>
					<ErrorMessage message={error}/>
				</StylesModal>
			</Modal.Body>
		</Modal>
	);
}

export default ErrorModal;