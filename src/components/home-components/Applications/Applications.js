import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import SearchApps from '../SearchApps';

function Applications({ loggedIn, userInfo, applications, getApplications }) {
	const [show, setShow] = useState(false);

	// SORT OPTION STATE
	const [type, setType] = useState('Default');

	// FILTER ALL APPS
	let filteredApps = [];

	// SEARCH INPUT STATE
	const [search, setSearch] = useState('');

	// SEARCH INPUT
	function handleSearchSubmit(event) {
		event.preventDefault();
		setSearch('');
	}

	useEffect(() => {
		setSearch('');
	}, [type]);

	// SWITCH CASE
	switch (type) {
		case 'Most Recent':
			const descArr = [...applications].map((obj) => {
				return { ...obj, date: new Date(obj.date_applied) };
			});
			filteredApps = descArr.sort(
				(objA, objB) => Number(objA.date) - Number(objB.date)
			);
			if (search) {
				filteredApps = applications.filter((application) => {
					return (
						application.job_title
							.toLowerCase()
							.includes(search.toLowerCase()) ||
						application.notes.toLowerCase().includes(search) ||
						application.company_name.toLowerCase().includes(search)
					);
				});
			}
			break;

		case 'Oldest':
			const ascArr = [...applications].map((obj) => {
				return { ...obj, date: new Date(obj.date_applied) };
			});
			filteredApps = ascArr.sort(
				(objA, objB) => Number(objB.date) - Number(objA.date)
			);
			if (search) {
				filteredApps = applications.filter((application) => {
					return (
						application.job_title
							.toLowerCase()
							.includes(search.toLowerCase()) ||
						application.notes.toLowerCase().includes(search) ||
						application.company_name.toLowerCase().includes(search)
					);
				});
			}
			break;

		case 'Applied':
			filteredApps = applications.filter(
				(application) => application.status === 'Applied'
			);
			if (search) {
				filteredApps = applications.filter((application) => {
					return (
						application.job_title
							.toLowerCase()
							.includes(search.toLowerCase()) ||
						application.notes.toLowerCase().includes(search) ||
						application.company_name.toLowerCase().includes(search)
					);
				});
			}
			break;

		case 'Interviewed':
			filteredApps = applications.filter(
				(application) => application.status === 'Interviewed'
			);
			if (search) {
				filteredApps = applications.filter((application) => {
					return (
						application.job_title
							.toLowerCase()
							.includes(search.toLowerCase()) ||
						application.notes.toLowerCase().includes(search) ||
						application.company_name.toLowerCase().includes(search)
					);
				});
			}
			break;

		case 'Rejected':
			filteredApps = applications.filter(
				(application) => application.status === 'Rejected'
			);
			if (search) {
				filteredApps = applications.filter((application) => {
					return (
						application.job_title
							.toLowerCase()
							.includes(search.toLowerCase()) ||
						application.notes.toLowerCase().includes(search) ||
						application.company_name.toLowerCase().includes(search)
					);
				});
			}
			break;

		case 'Default':
			if (search) {
				filteredApps = applications.filter((application) => {
					return (
						application.job_title
							.toLowerCase()
							.includes(search.toLowerCase()) ||
						application.notes.toLowerCase().includes(search) ||
						application.company_name.toLowerCase().includes(search)
					);
				});
			} else {
				filteredApps = applications;
			}
	}

	let newAppList = filteredApps.map((application) => {
		return (
			<Link to={`/applications/${application.id}`}>
				<div className='card' key={application.id}>
					<div>
						{application.job_title} @ {application.company_name}
					</div>
					<div>Current status: {application.status}</div>
					<div>Applied on: {application.date_applied}</div>

					<br />
				</div>
			</Link>
		);
	});

	return (
		<div className='test-div'>
			{loggedIn && (
				<Container>
					<SearchApps
						setType={setType}
						setSearch={setSearch}
						search={search}
						handleSubmit={handleSearchSubmit}
					/>

					<div id='feed-main-div'>
						<h2>My Feed</h2>
						{newAppList}
						<hr />
					</div>
				</Container>
			)}
		</div>
	);
}
export default Applications;
