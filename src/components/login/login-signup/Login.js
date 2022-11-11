import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';

function Login({ setLoggedIn, handleSetLoggedIn }) {
	const initialFormValues = {
		email: '',
		password: '',
	};

	const navigate = useNavigate();
	const [formValues, setFormValues] = useState(initialFormValues);
	const [error, setError] = useState(false);

	const handleChange = (e) => {
		setFormValues((prevState) => {
			return { ...prevState, [e.target.name]: e.target.value };
		});
	};

	const handleLogIn = async (e) => {
		e.preventDefault();
		setError(false);
		try {
			const response = await fetch('http://localhost:8000/token/login/', {
				method: 'POST',
				body: JSON.stringify(formValues.auth_token),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			if (response.status === 200) {
				const data = await response.json();
				handleSetLoggedIn(data.auth_token);
				navigate('/');
			} else if (response.status === 400) {
				setError(true);
			}
		} catch (error) {}
		return;
	};

	// UPON LOGIN NAVIGATE TO FEED / HOME

	return (
		<div id='login-main-div'>
			<h1>Login</h1>
			<Form id='login-form' onSubmit={handleLogIn}>
				<Form.Group controlId='email'>
					<Form.Label>Email</Form.Label>
					<Form.Control
						required
						autoFocus
						type='email'
						value={formValues.email}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='password'>
					<Form.Control
						required
						type='password'
						value={formValues.password}
						onChange={handleChange}
					/>
				</Form.Group>
				<Button type='submit'>Log In</Button>
			</Form>
			{error && (
				<Alert variant='warning'>
					User or password not found. Try again or{' '}
					<Link to='/signup'>sign up</Link>.
				</Alert>
			)}
		</div>
	);
}

export default Login;
