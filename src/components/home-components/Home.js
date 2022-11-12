// import { useNavigate } from 'react-router-dom';
import Applications from './Applications/Applications';
import SearchApps from './SearchApps';
import { Link } from 'react-router-dom';

function Home({ loggedIn }) {
	// const navigate = useNavigate();

	return (
		<>
			{{ loggedIn } ? (
				<div>
					<SearchApps />
					<hr></hr>
					<h3>Currently Viewing Your Home</h3>
					<Applications loggedIn={loggedIn} />
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
