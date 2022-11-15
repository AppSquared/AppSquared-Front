import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Button, Modal } from 'react-bootstrap';
import ContactEdit from './ContactEdit';
import ContactCreate from './ContactCreate';
import useGetContact from './useGetContact';
import API_URL from '../../../apiConfig';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactDetails({ userInfo, loggedIn }) {
	const navigate = useNavigate();
	const [show, setShow] = useState(false);
	const { id } = useParams();
	const contact = useGetContact(id);
	const [showContactForm, setShowContactForm] = useState(false);

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
		<div id='appDetails'>
			<h2>{contact.name}</h2>
			<h3>{contact.title}</h3>
			{/* <h3>Contact to/for: {contact.application.self}</h3> */}
			<div>Email: {contact.email}</div>
			<div>Phone number: {contact.phone_number}</div>
			<div>
				<p>Notes:</p>
				<p>{contact.notes}</p>
			</div>
			{/* {userInfo && userInfo.username === application.owner && ( */}
			<>
				<div>
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
				</div>
				<div>
					<Button onClick={() => setShowContactForm(true)}>
						Add a new contact
					</Button>
					<Modal
						show={showContactForm}
						onHide={() => setShowContactForm(false)}>
						<Modal.Header>
							<Modal.Title>Add a Contact</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<ContactCreate
								setShow={setShowContactForm}
								handleDelete={handleDelete}
							/>
						</Modal.Body>
						<Modal.Footer>
							<Button
								variant='secondary'
								onClick={() => setShowContactForm(false)}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
			</>
			{/* )} */}
		</div>
	);
}

export default ContactDetails;
