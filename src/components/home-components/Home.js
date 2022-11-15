import { useState, useEffect } from 'react';
import Applications from './Applications/Applications';
import { Link } from 'react-router-dom';
import API_URL from '../../apiConfig';
import { Button, Modal } from 'react-bootstrap';
import ApplicationCreate from './Applications/ApplicationCreate';
import { useNavigate } from 'react-router-dom';

function Home({ loggedIn, userInfo }) {
	const navigate = useNavigate();
	const [applications, setApplications] = useState([]);
	const [error, setError] = useState(false);
	const [show, setShow] = useState(false);


	const getApplications = async () => {
		try {
			setError(false);
			const response = await fetch(API_URL + 'applications/');
			if (response.status === 200) {
				const data = await response.json();

				// if userInfo.username === owner
				// then set applications(data)

				let userApplications = data.filter((application) => {
					if (userInfo.username === application.owner) {
						return application;
					}
				});
				setApplications(userApplications);
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
	});

	if (!error && !applications.length) {
		return <div>No applications found.</div>;
	}
	function renderApplications() {
		if (!loggedIn) {
			navigate('/login');
		} else if (applications.length === 0) {
			return (
				<>
					<h1>No Applications Found</h1>
					<Button onClick={() => setShow(true)}>New Application</Button>
					<Modal show={show} onHide={() => setShow(false)}>
						<Modal.Header>
							<Modal.Title>New Application</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<ApplicationCreate
							getApplications={getApplications}
							setShow={setShow} />
						</Modal.Body>
						<Modal.Footer>
							<Button variant='secondary' onClick={() => setShow(false)}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
				</>
			);
		} else {
			return (
				<>
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
					<div>
						<hr></hr>
						<Applications
							applications={applications}
							userInfo={userInfo}
							loggedIn={loggedIn}
						/>
					</div>
				</>
			);
		}
	}
	return renderApplications();
}

export default Home;
