import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Button, Modal } from 'react-bootstrap';
import ApplicationEdit from './ApplicationEdit';
import useGetApp from './useGetApp';
import API_URL from '../../../apiConfig';

function ApplicationDetails({ userInfo, loggedIn }) {
	const navigate = useNavigate();
	const [show, setShow] = useState(false);
	const { id } = useParams();
	const application = useGetApp(id);

	const handleDelete = async (e) => {
		const confirmDelete = window.confirm(
			'Are you sure you want to delete this application?'
		);

		if (confirmDelete) {
			try {
				const response = await fetch(`${API_URL}applications/${id}`, {
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
	if (!application) {
		return null;
	}
	// const contactLink = application.contacts[0].slice(-1);
	return (
		<div id='appDetails'>
			<h2>
				{application.job_title}@ {application.company_name} details
			</h2>

			<div className='appD2'>
				<h5>
					Current status: <em>{application.status}</em>
				</h5>
			</div>

			<div className='appD2'>
				<h5>
					Applied on: <em>{application.date_applied}</em>
				</h5>
			</div>

			<div className='appD2'>
				<h5>
					Created on: <em>{application.date_logged}</em>
				</h5>
			</div>

			<div className='appD2'>
				<h5>
					Created by: <em>{application.owner}</em>
				</h5>
			</div>

			{/* <Link to={`/contacts/${application.contacts[0].slice(-1)}`}>
				Contact(s)
			</Link> */}
			<div className='notes'>
				<h5>
					<p>Notes:</p>
					<p>{application.notes}</p>
				</h5>
			</div>

			{userInfo && userInfo.username === application.owner && (
				<>
					<Button onClick={() => setShow(true)}>Edit</Button>
					<Modal show={show} onHide={() => setShow(false)}>
						<Modal.Header>
							<Modal.Title>Edit Application</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<ApplicationEdit setShow={setShow} handleDelete={handleDelete} />
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
			)}
		</div>
	);
}

export default ApplicationDetails;
