import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApplicationCreate from './Applications/ApplicationCreate';
import { Form } from 'react-bootstrap';

function SearchApps({ setType, setSearch, search, handleSubmit }) {
	// MODAL
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [show, setShow] = useState(false);

	return (
		<div id='search-main-div'>
			<Form>
				<Form.Group controlid='dropdown'>
					<Form.Label>Sort Feed By: </Form.Label>
					<Form.Control
						controlid='drop-down'
						as='select'
						defaultValue={'Default'}
						onChange={(e) => {
							setType(e.target.value);
						}}>
						<option value='Default'>All</option>
						<option value='Most Recent'>Most Recent</option>
						<option value='Oldest'>Oldest</option>
						<option value='Applied'>Status: Applied</option>
						<option value='Interviewed'>Status: Interviewed</option>
						<option value='Rejected'>Status: Rejected</option>
					</Form.Control>
				</Form.Group>
			</Form>

			<Form id='search-form' className='' onSubmit={handleSubmit}>
				<Form.Label>Search Applications</Form.Label>
				<div id='form-input-button'>
					<Form.Control
						controlid='search-by-select'
						id='search-by-select'
						type='text'
						name='search-input'
						onChange={(event) => setSearch(event.target.value)}
						value={search}
						required={true}
						placeholder='Refine Your Feed'
					/>
				</div>
				{/* </Link> */}
			</Form>
		</div>
	);
}

export default SearchApps;
