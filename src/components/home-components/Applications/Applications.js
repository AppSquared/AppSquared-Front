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
<<<<<<< HEAD
	// SWITCH CASE
=======

	useEffect(() => {
		getApplications();
	}, []);

	// 	GET ALL APPS
	const getApplications = async (sort) => {
		try {
			setError(false);
			const response = await fetch('http://localhost:8000/applications/');
			if (response.status === 200) {
				const data = await response.json();
				setApplications(data);
			} else {
				setError(true);
			}
		} catch (error) {
			setError(true);
		}
		return;
	};

	// if no applications, show
	if (!error && !applications.length) {
		return <div>No applications found.</div>;
	}

>>>>>>> 38113db (Add search functionality. Add card class)
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
<<<<<<< HEAD
			if (search) {
				filteredApps = applications.filter((application) => {
					return application.notes.includes(search);
				});
=======
			if(search){
				filteredApps = applications.filter((application)=>{
					return application.notes.includes(search)
				})
>>>>>>> 38113db (Add search functionality. Add card class)
			} else {
				filteredApps = applications;
			}
	}

	let newAppList = filteredApps.map((application) => {
		return (
			<div className='card'>
				<div>Current status: {application.status}</div>
				<div>Created on: {application.date_logged}</div>
				<div>Created by: {application.owner}</div>
				<div>
					<p>Notes:</p>
					<p>{application.notes}</p>
				</div>
<<<<<<< HEAD
				{/* <Link to={`contacts/${application.contacts[0].id}`}>
											Contact(s)
										</Link> */}
				<div className='card-footer text-muted'>
					Applied on: {application.date_applied}
				</div>
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
=======
				<Link to={application.application_url}>
					Click here to view this app
				</Link>
				<div className='card-footer text-muted'>Applied on: {application.date_applied}</div>
				{/* <div>{(position = application.position)}</div>
							<div>{(company = application.company)}</div>
							<div>{(additionalInfo = application.additionalInfo)}</div>
							<div>{(pocName = application.pocName)}</div>
							<div>{(pocNumber = application.pocNumber)}</div>
							<div>{(pocEmail = application.pocEmail)}</div> */}
>>>>>>> 38113db (Add search functionality. Add card class)
				<br />
			</div>
		);
	});

	return (
		<div>
			{loggedIn && (
				<Container>
					<SearchApps
<<<<<<< HEAD
						// ADDED FOLLOWING PARAMS
=======
>>>>>>> 38113db (Add search functionality. Add card class)
						setType={setType}
						setSearch={setSearch}
						search={search}
						handleSubmit={handleSubmit}
					/>
<<<<<<< HEAD

=======
>>>>>>> 38113db (Add search functionality. Add card class)
					<div id='feed-main-div'>
						<h2>My Feed</h2>
						<Button onClick={() => setShow(true)}>New Application</Button>
						{/* *ADDED NEW APP LIST* */}
						{newAppList}
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
