import { useState } from 'react';
import { navigate, useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';
import API_URL from '../../../apiConfig';

function ContactCreate({ setCreatedContact, setShow, getContacts }) {
	const initialContactValues = {
		name: '',
		title: '',
		phoneNumber: '',
		email: '',
		notes: '',
	};

	const navigate = useNavigate();
	const [newContact, setNewContact] = useState(initialContactValues);

	const handleChange = (event) => {
		setNewContact((prevState) => {
			return { ...prevState, [event.target.name]: event.target.value };
		});
	};

	const createContact = async (event) => {
		event.preventDefault();
		const formValues = new FormData(event.target);
		try {
			const response = await fetch(API_URL + 'contacts/', {
				method: 'POST',
				body: formValues,
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			if (response.status === 201) {
				setCreatedContact(true);
				getContacts();
				setCreatedContact(false);
			}
		} catch (err) {
			return;
		}
	};

	return (
		<div>
			<ContactForm
				setShow={setShow}
				handleSubmit={createContact}
				handleChange={handleChange}
				formValues={newContact}
			/>
		</div>
	);
}

export default ContactCreate;
