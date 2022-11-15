import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

function Navbar({ loggedIn, handleLogout, userInfo }) {
	return (
		<div className='navbar-container'>
			<h1 className='navbar-Title'>
				<Link to='/'>App Squared</Link>
			</h1>
			<div className='navbar-links'>
				{userInfo && (
					<h4>
						Welcome <em>{userInfo.username}</em>! 👋
					</h4>
				)}
				{loggedIn ? (
					<>
						{/* <Link to='/users/me'>My Profile</Link> */}
						<div id='outer-container'>
							<Menu
								pageWrapId={'page-wrap'}
								outerContainerId={'outer-container'}
								noOverlay
								right>
								<Link to='/' onClick={handleLogout}>
									Logout
								</Link>
							</Menu>
						</div>
					</>
				) : (
					<>
						<div id='outer-container'>
							<Menu
								pageWrapId={'page-wrap'}
								outerContainerId={'outer-container'}
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
