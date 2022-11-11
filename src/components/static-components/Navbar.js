
import {Link} from 'react-router-dom'
function Navbar({setIsLoggedIn, loggedIn}) {
  // LOGIN / LOGOUT BUTTON
  // TOGGLES DEPENDING ON WHETHER USER IS LOGGED IN


  return (
		<div className="navbar-container">
      <h1>App Squared</h1>

      {/* buttons */}
			<div>
				{!loggedIn ? (
					<Link to='/'>Login</Link>
				) : (
					<Link to='/login'>Logout</Link>
				)}
			</div>
		</div>
	);
}

export default Navbar;
