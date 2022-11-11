import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
	const initialFormData = {
		email: '',
		username: '',
		password: '',
		re_password: '',
	};

	const navigate = useNavigate();
	const [formData, setFormData] = useState(initialFormData);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [signupErrors, setSignupErrors] = useState([]);

	const handleChange = (e) => {
		setFormData((prevState) => {
			return { ...prevState, [e.target.name]: e.target.value };
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(false);
		setSignupErrors([]);
		try {
			const response = await fetch('http://localhost:8000/users/', {
				method: 'POST',
				body: JSON.stringify(formData),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			if (response.status === 201) {
				setSuccess(true);
				setTimeout(() => {
					navigate('/login');
				}, 4000);
			} else {
				const data = await response.json();
				const errors = [];
				for (const error in data) {
					errors.push(data[error]);
				}

				setSignupErrors(errors);
			}
		} catch (err) {
			setError(true);
		}
		return;
	};
	const handlePasswordMatch = (e) => {
		if (formData.password !== formData.re_password) {
			setError(true);
		} else {
			setError(false);
		}
	};

	return (
		<div className='hide' id='login-main-div'>
			<h1>Sign Up</h1>
			<Form onSubmit={handleSubmit} id='signup-form'>
				<Form.Group controlId='username'>
					<Form.Label>Username</Form.Label>
					<Form.Control
						required
						autoFocus
						type='text'
						name='username'
						value={formData.username}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='formBasicEmail'>
					<Form.Label>Email</Form.Label>
					<Form.Control
						required
						type='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
					/>
					<Form.Control.Feedback type='invalid'>
						Please provide a valid email .
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group controlId='password'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						required
						type='password'
						name='password'
						value={formData.password}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='re_password'>
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control
						required
						type='password'
						value={FormData.re_password}
						onChange={handleChange}
						onBlur={handlePasswordMatch}
					/>
				</Form.Group>
				<Button type='submit' disabled={error}>
					Create Account
				</Button>

				{error && <Alert variant='danger'>Passwords do not match.</Alert>}
				{success && (
					<Alert variant='success'>
						Success! We're redirecting you now, or you can click{' '}
						{<Link to='/login'>here</Link>}.
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
