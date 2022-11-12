import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';

function Login({ handleSetLoggedIn }) {
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
			const response = await fetch('http://localhost:8000/token/login', {
				method: 'POST',
				body: JSON.stringify(formValues),
				headers: {
					Accept: 'application/json, text/plain, */*',
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

	// UPON LOGIN NAVIGATE TO HOME

	return (
		<div id='login-main-div'>
			<h2 id="login-title">App Squared</h2>
			<Form id='login-form' onSubmit={handleLogIn}>
				<Form.Group controlId='email'>
					{/* <Form.Label>Email</Form.Label> */}
					<Form.Control
						required
						autoFocus
						type='email'
						name='email'
						placeholder='example@example.com'
						value={formValues.email}
						onChange={handleChange}
						placeholder={'Email'}
					/>
				</Form.Group>
				{/* <Form.Label>Password</Form.Label> */}
				<Form.Group controlId='password'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						required
						type='password'
						name='password'
						placeholder='Password'
						value={formValues.password}
						onChange={handleChange}
						placeholder={'Password'}
					/>
				</Form.Group>
				<Button id='login-button' type='submit'>Log In</Button>
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
