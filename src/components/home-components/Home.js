// import { useNavigate } from 'react-router-dom';
import Applications from './Applications/Applications';
import { Link } from 'react-router-dom';

function Home({ loggedIn, userInfo }) {
	// const navigate = useNavigate();

	return (
		<>
			{{ loggedIn } ? (
				<div>
					<h3>Home</h3>
					<hr></hr>
					<Applications userInfo={userInfo} loggedIn={loggedIn} />
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
