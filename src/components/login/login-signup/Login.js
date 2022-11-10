import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


function Login({setIsLoggedIn, loggedIn}) {
  const navigate = useNavigate();

  // AXIOS POST REQUEST FOR LOGIN
  // UPON LOGIN NAVIGATE TO FEED / HOME

	return (
		<div id='login-main-div'>
			<h1>Login</h1>

			<form id='login-form' onSubmit={((event)=>event.preventDefault())}>

					<input name='username' type='text' placeholder='username'/>

					<input name='password' type='password' placeholder='password'/>

        <button type='submit' onClick={(()=>setIsLoggedIn(!loggedIn))}>Log In</button>
        <button type='submit' onClick={(()=>navigate('/signup'))}>Sign Up</button>
			</form>
		</div>
	);
}

export default Login;
