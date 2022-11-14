import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Modal } from 'react-bootstrap';
import SearchApps from '../SearchApps';
import ApplicationCreate from './ApplicationCreate';
import ApplicationDetails from './ApplicationDetails';

function Applications({ loggedIn, userInfo, applications }) {
	const [show, setShow] = useState(false);

	// if an application has a contact[]
	// if render <Link to={`contacts/${application.contacts[0].id}`}> Contact(s)</Link>
	
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
								<div key={application.id}>
									<Link to={`/applications/${application.id}`}>
										<div>
											{application.job_title} @ {application.company_name}
										</div>
										<div>Current status: {application.status}</div>
										<div>Applied on: {application.date_applied}</div>
										<br />
									</Link>
									<p>
										{/* <Link to={`contacts/${application.contacts[0].id}`}>
											Contact(s)
										</Link> */}
									</p>

								</div>
							);
						})}
					</div>
				</Container>
			)}
		</div>
	);
}
export default Applications;
