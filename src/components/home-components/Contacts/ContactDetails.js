import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Button, Modal } from 'react-bootstrap';
import ContactEdit from './ContactEdit';
import useGetContact from './useGetContact';
import API_URL from '../../../apiConfig';

function ContactDetails({ userInfo, loggedIn }) {
	const navigate = useNavigate();
	const [show, setShow] = useState(false);
	const { id } = useParams();
	const contact = useGetContact(id);

	const handleDelete = async (e) => {
		const confirmDelete = window.confirm(
			'Are you sure you want to delete this contact?'
		);

		if (confirmDelete) {
			try {
				const response = await fetch(`${API_URL}contacts/${id}`, {
					method: 'DELETE',
					headers: {
						Authorization: `Token ${localStorage.getItem('token')}`,
					},
				});

				if (response.status === 204) {
					navigate('/');
				}
			} catch (err) {
				return;
			}
		}
	};
	if (!contact) {
		return null;
	}

	return (
		<>
			<h2>
				{contact.name}, {contact.title}
			</h2>
			<h3>Contact for: {contact.application_id}</h3>
			<div>Email: {contact.email}</div>
			<div>Phone number: {contact.phone_number}</div>
			<div>
				<p>Notes:</p>
				<p>{contact.notes}</p>
			</div>
			{/* {userInfo && userInfo.username === application.owner && ( */}
			<>
				<Button onClick={() => setShow(true)}>Edit</Button>
				<Modal show={show} onHide={() => setShow(false)}>
					<Modal.Header>
						<Modal.Title>Edit Contact</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<ContactEdit setShow={setShow} handleDelete={handleDelete} />
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={handleDelete} variant='danger'>
							Delete
						</Button>
						<Button variant='secondary' onClick={() => setShow(false)}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			</>
			{/* )} */}
		</>
	);
}

export default ContactDetails;
