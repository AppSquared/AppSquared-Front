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

function SearchApps()  {

const apps = [
	{
		position: 'test position 1',
		company: 'test company 1',
		link: 'test link 1',
		additionalInfo: 'test additional info 1',
		pocName: 'test poc name',
		pocNumber: 'test poc number',
		pocEmail: 'test poc email',
	},
	{
		position: 'test position 2',
		company: 'test company 2',
		link: 'test link 2',
		additionalInfo: 'test additional info 2',
		pocName: 'test poc name 2',
		pocNumber: 'test poc number 2',
		pocEmail: 'test poc email 2',
	},
	{
		position: 'test position 3',
		company: 'test company 3',
		link: 'test link 3',
		additionalInfo: 'test additional info 3',
		pocName: 'test poc name 3',
		pocNumber: 'test poc number 3',
		pocEmail: 'test poc email 3',
	},
];


  const [show, setShow] = useState(false);
  const [searchResults, setSearchResults] = useState([])
  const [finalSearch, setFinalSearch] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  function handleChange(event) {
	const searchBy = event.target.value
	const filter = apps.filter((app) => {
		return app.includes(searchBy) 

	})

	setSearchResults(filter)
	console.log(searchResults)
  };

   function handleSubmit(event) {
	event.preventDefault()
	setFinalSearch(searchResults)
	console.log(finalSearch)
   }
  return (
		<div id='search-main-div'>
			<form onSubmit={(event) => event.preventDefault()}>
				<label>Search By:</label>
				<select>
					<option>status</option>           
					{/* <option>company</option>
					<option>link</option>
					<option>additionalInfo</option>
					<option>pocName</option>
					<option>pocNumber</option>
					<option>pocEmail</option> */}
				</select>
				<input
					id='search-by-select'
					type='text'
					placeholder='Leave Blank if you wish to search your specified field for ALL options'
					onChange={handleChange}
					
				/>
				<button type='submit' onClick={handleSubmit}>Search</button>
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
