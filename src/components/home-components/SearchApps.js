import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormGroup } from 'react-bootstrap';

/*
[] -REFATOR MODAL - maybe make it separate component?
[] - Get request that allows you to search based on options put in drop down and text field
[] - Post request for adding app 
*/

function SearchApps() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
		<div id='search-main-div'>
			<form onSubmit={(event) => event.preventDefault()}>
				<label>Search By:</label>
				<select>
					<option>Placeholder</option>
					<option>Option 1</option>
					<option>Option 2</option>
					<option>Option 3</option>
				</select>
				<input
					id='search-by-select'
					type='text'
					placeholder='Leave Blank if you wish to search your specified field for ALL options'
				/>
				<button type='submit'>Search</button>
				<button type='submit' onClick={handleShow}>
					Add App
				</button>
			</form>

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

export default SearchApps;
