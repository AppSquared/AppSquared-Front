import { Link } from 'react-router-dom';

function Navbar({ loggedIn, handleLogout, userInfo }) {
	// LOGIN / LOGOUT BUTTON
	// TOGGLES DEPENDING ON WHETHER USER IS LOGGED IN
	return (
		<div className='navbar-container'>
			<h1 className='navbar-Title'>
				<Link to='/'>App Squared</Link>
			</h1>
			<div className='navbar-links'>
				{userInfo && <p>{userInfo.username}</p>}
				{loggedIn ? (
					<>
						{/* <Link to='/users/me'>My Profile</Link> */}
						<Link to='/' onClick={handleLogout}>
							Logout
						</Link>
					</>
				) : (
					<>
						<Link to='/signup'>Sign Up</Link>
						<Link to='/login'>Login</Link>
					</>
				)}
			</div>
		</div>
	);
}

export default Navbar;
