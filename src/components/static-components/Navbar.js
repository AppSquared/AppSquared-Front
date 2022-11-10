import React, {useEffect} from 'react';

function Navbar({setIsLoggedIn, loggedIn}) {
  // LOGIN / LOGOUT BUTTON
  // TOGGLES DEPENDING ON WHETHER USER IS LOGGED IN


  return (
		<>
      <h1>App Squared</h1>

      {/* buttons */}
			<div>
				{!loggedIn ? (
					<Link to='/'>Login</Link>
				) : (
					<Link to='/login'>Logout</Link>
				)}
			</div>
		</>
	);
}

export default Navbar;
