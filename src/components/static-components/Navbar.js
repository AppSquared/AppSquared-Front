import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

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
					<>{/* <Link to='/users/me'>My Profile</Link> */}</>
				) : (
					<>
						<div id='outer-container'>
							<Menu
								pageWrapId={'page-wrap'}
								outerContainerId={'outer-container'}
								isOpen={false}
								noOverlay
								right>
								<Link to='/signup'>Sign Up</Link>
								<Link to='/login'>Login</Link>
							</Menu>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default Navbar;
