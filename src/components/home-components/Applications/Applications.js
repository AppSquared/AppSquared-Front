import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Applications({ loggedIn }) {
	const [applications, setApplications] = useState([]);
	const [error, setError] = useState(false);

	const getApplications = async () => {
		try {
			setError(false);
			const response = await fetch('http://localhost:8000/users/');
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
	useEffect(() => {
		getApplications();
	}, []);

	if (error && !applications.length) {
		console.log(error);
		return <div>No applications found.</div>;
	}
	return (
		<div>
			<h1>Applications</h1>
			{loggedIn && (
				<Link to='applications/new'>
					<Button>Add an application</Button>
				</Link>
			)}
			<div id='feed-main-div'>
				<h3>My Feed</h3>
				<hr />
				{applications.map((application) => {
					return (
						<div>
							<div> {application.id}</div>
							<div>{application.date_applied}</div>
							<div>{application.notes}</div>
							<div>{application.link}</div>
							<div>{application.status}</div>
							{/* <div>{(position = application.position)}</div>
							<div>{(company = application.company)}</div>
							<div>{(additionalInfo = application.additionalInfo)}</div>
							<div>{(pocName = application.pocName)}</div>
							<div>{(pocNumber = application.pocNumber)}</div>
							<div>{(pocEmail = application.pocEmail)}</div> */}
						</div>
					);
				})}
			</div>
		</div>
	);
}
export default Applications;
