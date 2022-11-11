import { useNavigate } from 'react-router-dom';
import Applications from './Applications/Applications';
import SearchApps from './SearchApps';

function Home({ loggedIn }) {
	const navigate = useNavigate();

	function render() {
		{
			loggedIn ? (
				<div>
					<SearchApps />
					<hr></hr>
					<h3>Currently Viewing Your Home</h3>
					<Applications loggedIn={loggedIn} />
				</div>
			) : (
				navigate('/login')
			);
		}
	}
	return <>{render()}</>;
}

export default Home;
