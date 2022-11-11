import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

function Login({ setIsLoggedIn, loggedIn }) {
	const initialFormData = {
		email: '',
		password: '',
	};

	const navigate = useNavigate();
	const [formData, setFormData] = useState(initialFormData)
	const [error, setError] = useState(false)

	const handleChange = (e) =>{
		setFormData((prevState) => {
			return { ...prevState, [e.target.name]: e.target.value };
		});
	};


	const handleLogIn = async (e) => {
		e.preventDefault();
		setError(false)
		try{
			const response = await fetch('https://localhost:8000/' + 'token/login/', {
				method: 'POST',
				body: JSON.stringify(formData),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			if(response.status === 200) {


			const data = await response.json()
			setIsLoggedIn(data.auth_token)
			console.log(loggedIn)
			navigate('/');
			} else if (response.status === 400) {
			setError(true)
			}
		} catch (error) {}
		return;
	}

	// AXIOS POST REQUEST FOR LOGIN
	// UPON LOGIN NAVIGATE TO FEED / HOME

	return (
		<div id='login-main-div'>
			<h1>Login</h1>

			{/* <form id='login-form' onSubmit={(event) => event.preventDefault()}> */}
<Form id='login-form' onSubmit={handleLogIn}>

				<input name='username' type='text' placeholder='username' />

				<input name='password' type='password' placeholder='password' />

				<button type='submit' onClick={() => setIsLoggedIn(!loggedIn)}>
					Log In
				</button>
				<button type='submit' onClick={() => navigate('/signup')}>
					Sign Up
				</button>
			</Form>
			{/* </form> */}
		</div>
	);
}

export default Login;
