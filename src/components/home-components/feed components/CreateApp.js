import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FormGroup } from 'react-bootstrap';


function CreateApp({setShow, show}) {

		const handleClose = () => setShow(false);

  return (
		<div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Create Application</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<FormGroup>
							<label>Position</label>
							<input placeholder='Position'></input>
						</FormGroup>

						<FormGroup>
							<label>Company</label>
							<input placeholder='Company'></input>
						</FormGroup>

						<FormGroup>
							<label>Link</label>
							<input placeholder='Application Link'></input>
						</FormGroup>

						<FormGroup>
							<label>Additional Info</label>
							<input placeholder='Additional Info'></input>
						</FormGroup>

						<FormGroup>
							<label>Point Of Contact:</label>
							<br />
							<label>Name</label>
							<input placeholder='Name'></input>
						</FormGroup>

						<FormGroup>
							<label>Number</label>
							<input placeholder='Number'></input>
						</FormGroup>

						<FormGroup>
							<label>Email</label>
							<input placeholder='Email'></input>
						</FormGroup>
					</form>
				</Modal.Body>

				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary' onClick={handleClose}>
						Create App
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default CreateApp;