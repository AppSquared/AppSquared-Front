import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Modal } from 'react-bootstrap';
import SearchApps from '../SearchApps';
import ApplicationCreate from './ApplicationCreate';
import ApplicationDetails from './ApplicationDetails';

function Applications({ loggedIn, userInfo }) {
	const [applications, setApplications] = useState([]);
	const [error, setError] = useState(false);
	const [show, setShow] = useState(false);

	const getApplications = async () => {
		try {
			setError(false);
			const response = await fetch('http://localhost:8000/applications/');
			if (response.status === 200) {
				const data = await response.json();
				setApplications(data);
			} else {
				setError(true);
			}
		} catch (err) {
			setError(true);
		}
		return;
	};
	useEffect(() => {
		getApplications();
	}, []);

	if (!error && !applications.length) {
		return <div>No applications found.</div>;
	}

	return (
		<div>
			{loggedIn && (
				<Container>
					<SearchApps />
					<div id='feed-main-div'>
						<h2>My Feed</h2>
						<Button onClick={() => setShow(true)}>New Application</Button>

						<Modal show={show} onHide={() => setShow(false)}>
							<Modal.Header>
								<Modal.Title>New Application</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<ApplicationCreate setShow={setShow} />
							</Modal.Body>
							<Modal.Footer>
								<Button variant='secondary' onClick={() => setShow(false)}>
									Close
								</Button>
							</Modal.Footer>
						</Modal>
						<hr />
						{applications.map((application) => {
							return (
								<Link to={`/applications/${application.id}`}>
									<div key={application.id}>
										<div>Current status: {application.status}</div>
										<div>Applied on: {application.date_applied}</div>
										<div>Created on: {application.date_logged}</div>
										<div>Created by: {application.owner}</div>
										<div>
											<p>Notes:</p>
											<p>{application.notes}</p>
										</div>
										{/* <div>{(position = application.position)}</div>
							<div>{(company = application.company)}</div>
							<div>{(additionalInfo = application.additionalInfo)}</div>
							<div>{(pocName = application.pocName)}</div>
							<div>{(pocNumber = application.pocNumber)}</div>
							<div>{(pocEmail = application.pocEmail)}</div> */}
										<br />
									</div>
								</Link>
							);
						})}
					</div>
				</Container>
			)}
		</div>
	);
}
export default Applications;
