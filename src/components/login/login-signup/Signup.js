import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import Login from './Login';
import API_URL from '../../../apiConfig';

function Signup() {
	const initialFormValues = {
		email: '',
		username: '',
		password: '',
		re_password: '',
	};

	const navigate = useNavigate();
	const [formValues, setFormValues] = useState(initialFormValues);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [signupErrors, setSignupErrors] = useState([]);

	const handleChange = (e) => {
		setFormValues((prevState) => {
			console.log(e.target.name);
			console.log(e.target.value);
			return { ...prevState, [e.target.name]: e.target.value };
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(false);
		setSignupErrors([]);

		try {
			const response = await fetch(API_URL + 'users/', {
				method: 'POST',
				body: JSON.stringify(formValues),
				headers: {
					Accept: 'application/json, text/plain, */*',
					'Content-Type': 'application/json',
				},
			});
			if (response.status === 201) {
				setSuccess(true);
				setTimeout(() => {
					navigate('/');
				}, 3000);
			} else {
				const data = await response.json();
				const errors = [];
				for (const error in data) {
					errors.push(data[error]);
				}
			}

			setSignupErrors(error);
		} catch (error) {
			setError(true);
		}
		return;
	};
	const handlePasswordMatch = (e) => {
		if (formValues.password !== formValues.re_password) {
			setError(true);
		} else {
			setError(false);
		}
	};

	return (
		<div className='hide' id='signup-main-div'>
			<h2 id='signup-title'>App Squared</h2>
			<Form onSubmit={handleSubmit} id='signup-form'>
				<Form.Group controlId='username'>
					{/* <Form.Label>Username</Form.Label> */}
					<Form.Control
						required
						autoFocus
						type='text'
						name='username'
						value={formValues.username}
						onChange={handleChange}
						placeholder={'Username'}
					/>
				</Form.Group>
				<Form.Group controlId='formBasicEmail'>
					{/* <Form.Label>Email</Form.Label> */}
					<Form.Control
						required
						type='email'
						name='email'
						value={formValues.email}
						onChange={handleChange}
						placeholder={'Email'}
					/>
					<Form.Control.Feedback type='invalid'>
						Please provide a valid email .
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group controlId='password'>
					{/* <Form.Label>Password</Form.Label> */}
					<Form.Control
						required
						type='password'
						name='password'
						defaultValue={formValues.password}
						onChange={handleChange}
						placeholder={'Password'}
					/>
				</Form.Group>
				<Form.Group controlId='re_password'>
					{/* <Form.Label>Confirm Password</Form.Label> */}
					<Form.Control
						required
						type='password'
						name='re_password'
						defaultValue={formValues.re_password}
						onChange={handleChange}
						onBlur={handlePasswordMatch}
						placeholder={'Confirm Password'}
					/>
				</Form.Group>
				<Button type='submit' disabled={error}>
					Create Account
				</Button>
				<div>Already signed up?</div>
				<Link to='/login' element={<Login />}>
					<div>Click here to login!</div>
				</Link>

				{error && <Alert variant='danger'>Passwords do not match.</Alert>}
				{success && (
					<Alert variant='success'>
						Success! Redirecting you now, or you can click{' '}
						{<Link to='/login'>here</Link>} to login.
					</Alert>
				)}
				{Boolean(signupErrors.length) &&
					signupErrors.map((error) => {
						return <Alert variant='danger'>{error}</Alert>;
					})}
			</Form>
		</div>
	);
}

export default Signup;
