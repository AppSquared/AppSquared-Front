import { useState, useEffect } from 'react';
import Applications from './Applications/Applications';
import { Link } from 'react-router-dom';
import API_URL from '../../apiConfig';
import { Button, Modal } from 'react-bootstrap';
import ApplicationCreate from './Applications/ApplicationCreate';

function Home({ loggedIn, userInfo }) {
	// const navigate = useNavigate();
	const [applications, setApplications] = useState([]);
	const [error, setError] = useState(false);
	const [show, setShow] = useState(false);

	const getApplications = async () => {
		try {
			setError(false);
			const response = await fetch(API_URL + 'applications/');
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
			{{ loggedIn } ? (
				<div>
					<hr></hr>
					<Applications
						applications={applications}
						userInfo={userInfo}
						loggedIn={loggedIn}
					/>
				</div>
			) : (
				<h2>
					<Link to='/login'>Log in</Link> or <Link to='/signup'>Sign up</Link>{' '}
					to view your feed.
				</h2>
			)}
		</>
	);
}

export default Home;
