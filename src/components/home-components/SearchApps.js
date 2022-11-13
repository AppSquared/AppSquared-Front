import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApplicationCreate from './Applications/ApplicationCreate';

/*
[] -REFATOR MODAL - maybe make it separate component?
[] - Get request that allows you to search based on options put in drop down and text field
[] - Post request for adding app
*/

function SearchApps() {
	const [show, setShow] = useState(false);

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
			</form>
		</div>
	);
}

export default SearchApps;
