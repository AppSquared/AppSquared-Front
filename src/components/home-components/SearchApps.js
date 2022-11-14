import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApplicationCreate from './Applications/ApplicationCreate';

function SearchApps() {
	const [show, setShow] = useState(false);

	return (
		<div id='search-main-div'>
			<Form>
				<Form.Group controlId='dropdown'>
					<Form.Label>Sort Feed By: </Form.Label>
					<Form.Control
						as='select'
						defaultValue={'Default'}
						onChange={(e) => {
							setType(e.target.value);
							// handleSortSubmit();
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

			<Form>
				<Form.Label>Search Applications</Form.Label>
				<Form.Control
					controlId='search-by-select'
					type='text'
					placeholder='Leave Blank if you wish to search your specified field for ALL options'
				/>
			</Form>
		</div>
	);
}

export default SearchApps;
