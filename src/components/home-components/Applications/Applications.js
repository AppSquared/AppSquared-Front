import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Modal } from 'react-bootstrap';
import SearchApps from '../SearchApps';
import ApplicationCreate from './ApplicationCreate';
import ApplicationDetails from './ApplicationDetails';

function Applications({ loggedIn, userInfo, applications }) {
	const [show, setShow] = useState(false);

	// SORT OPTION STATE
	const [type, setType] = useState('Default');

	// FILTER ALL APPS
	let filteredApps = [];

	// SEARCH INPUT STATE
	const [search, setSearch] = useState('');

	// SEARCH INPUT
	function handleSubmit(event) {
		event.preventDefault();
		setSearch('');
	}

	// SWITCH CASE
	switch (type) {
		case 'Most Recent':
			const descArr = [...applications].map((obj) => {
				return { ...obj, date: new Date(obj.date_applied) };
			});
			filteredApps = descArr.sort(
				(objA, objB) => Number(objA.date) - Number(objB.date)
			);
			break;

		case 'Oldest':
			const ascArr = [...applications].map((obj) => {
				return { ...obj, date: new Date(obj.date_applied) };
			});
			filteredApps = ascArr.sort(
				(objA, objB) => Number(objB.date) - Number(objA.date)
			);
			break;

		case 'Applied':
			filteredApps = applications.filter(
				(application) => application.status === 'Applied'
			);
			break;

		case 'Interviewed':
			filteredApps = applications.filter(
				(application) => application.status === 'Interviewed'
			);
			break;

		case 'Rejected':
			filteredApps = applications.filter(
				(application) => application.status === 'Rejected'
			);
			break;

		case 'Default':
			if (search) {
				filteredApps = applications.filter((application) => {
					return application.notes.includes(search);
				});
			} else {
				filteredApps = applications;
			}
	}

	let newAppList = filteredApps.map((application) => {
		return (
			<div className='card' key={application.id}>
				<Link to={`/applications/${application.id}`}>
					<div>
						{application.job_title} @ {application.company_name}
					</div>
					<div>Current status: {application.status}</div>
					<div>Applied on: {application.date_applied}</div>

					<br />
				</Link>
			</div>

			//  <Link to={`contacts/${application.contacts[0].id}`}>
			// 								Contact(s)
			// 							</Link>
			// 	<div className='card-footer text-muted'>
			// 		Applied on: {application.date_applied}
			// 	</div>
			// 					<p>
			// 							<Link to={`contacts/${application.contacts[0].id}`}>
			// 								Contact(s)
			// 							</Link>
		);
	});

	return (
		<div className='test-div'>
			{loggedIn && (
				<Container>
					<SearchApps
						// ADDED FOLLOWING PARAMS
						setType={setType}
						setSearch={setSearch}
						search={search}
						handleSubmit={handleSubmit}
					/>

					<div id='feed-main-div'>
						<h2>My Feed</h2>
						{/* *ADDED NEW APP LIST* */}
						{newAppList}
						{/* <Button onClick={() => setShow(true)}>New Application</Button>
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
						</Modal> */}
						<hr />

						{/* *DELETE*

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
						{/* </p>
								</div>
							);
						})}  */}
					</div>
				</Container>
			)}
		</div>
	);
}
export default Applications;
