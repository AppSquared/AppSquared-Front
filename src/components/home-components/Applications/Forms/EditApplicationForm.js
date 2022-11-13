import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function EditApplicationForm({
	handleSubmit,
	formValues,
	handleChange,
	error,
	setShow,
}) {
	const [type, setType] = useState('Applied');
	return (
		<div>
			<Form onSubmit={handleSubmit} encType='multipart/form-values'>
				<Form.Group controlId='date-applied'>
					<Form.Label>Date Applied</Form.Label>
					<Form.Control
						required
						autoFocus
						type='date'
						name='date_applied'
						onChange={handleChange}
						value={formValues.date_applied}
					/>
				</Form.Group>
				<Form.Group controlId='notes'>
					<Form.Label>Notes</Form.Label>
					<Form.Control
						required
						type='text'
						name='notes'
						onChange={handleChange}
						valueAsDate={formValues.notes}
					/>
				</Form.Group>
				<Form.Group controlId='status'>
					<Form.Label>Status</Form.Label>
					<Form.Control
						as='select'
						value={type}
						onChange={(e) => {
							console.log('e.target.value, e.target.value');
							setType(e.target.value);
						}}>
						<option value='Applied'>Applied</option>
						<option value='Interviewed'>Interviewed</option>
						<option value='Rejected'>Rejected</option>
					</Form.Control>
				</Form.Group>

				<Button
					type='submit'
					disabled={error}
					data-dismiss='modal'
					onClick={() => {
						setShow(false);
					}}>
					Submit
				</Button>
				{error && <Alert variant='danger'>Oops, please try again</Alert>}
			</Form>
		</div>
	);
}

export default EditApplicationForm;
