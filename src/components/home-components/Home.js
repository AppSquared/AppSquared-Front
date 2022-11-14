import { useState, useEffect } from 'react';
import Applications from './Applications/Applications';
import { Link } from 'react-router-dom';
import API_URL from '../../apiConfig';

function Home({ loggedIn, userInfo }) {
	// const navigate = useNavigate();
	const [applications, setApplications] = useState([]);
	const [error, setError] = useState(false);

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
