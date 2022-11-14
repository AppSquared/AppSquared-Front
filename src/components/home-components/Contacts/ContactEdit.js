import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EditContactForm from './Forms/EditContactForm';
import useGetContact from './useGetContact';
import { Form, Button, Alert } from 'react-bootstrap';

function ContactEdit({ setShow }) {
	const { id } = useParams();
	let navigate = useNavigate();
	const [error, setError] = useState(false);
	const [formValues, setFormValues] = useState(null);
	const [type, setType] = useState('Applied');
	const contact = useGetContact(id);

	const getContactDetail = async () => {
		try {
			const response = await fetch(`http://localhost:8000/contacts/${id}`);
			if (response.status === 200) {
				const data = await response.json();
				setFormValues(data);
			}
		} catch (err) {
			return;
		}
	};

	useEffect(() => {
		getContactDetail();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		try {
			const response = await fetch(`http://localhost:8000/contacts/${id}`, {
				method: 'PUT',
				body: formData,
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});

			if (response.status === 200) {
				navigate(`/contacts/${id}`);
			}
		} catch (error) {
			return;
		}
	};

	const handleChange = async (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	if (!formValues) {
		return <h3>loading...</h3>;
	}

	return (
		<div>
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
							value={formValues.notes}
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
		</div>
	);
}

export default ContactEdit;
