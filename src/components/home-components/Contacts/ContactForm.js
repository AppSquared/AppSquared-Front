import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function ContactForm({
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
				<Form.Group controlId='name'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						required
						autoFocus
						type='text'
						name='name'
						onChange={handleChange}
						value={formValues.name}
					/>
				</Form.Group>
				<Form.Group controlId='title'>
					<Form.Label>Company Name</Form.Label>
					<Form.Control
						required
						type='text'
						name='title'
						onChange={handleChange}
						value={formValues.title}
					/>
				</Form.Group>
				<Form.Group controlId='email'>
					<Form.Label>Email</Form.Label>
					<Form.Control
						required
						type='email'
						name='email'
						onChange={handleChange}
						value={formValues.email}
					/>
				</Form.Group>
				<Form.Group controlId='phone-number'>
					<Form.Label>Phone number</Form.Label>
					<Form.Control
						required
						type='text'
						name='phone_number'
						onChange={handleChange}
						value={formValues.phone_number}
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

export default ContactForm;
