import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
importAPI_URL

function Signup() {
	const initialFormData = {
		email: '',
		username: '',
		password: '',
		re_password: '',
	};

	const navigate = useNavigate();
	const [formData, setFormData] = useState(initialFormData);
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState(false)

	const handleChange = (e) =>{
		setFormData((prevState) => {
			return { ...prevState, [e.target.name]: e.target.value };
		});
	};

	const handleSubmit = async (e) =>{
		e.preventDefault();
		setError(false);
		try{
			const response = await fetch(API_URL + 'users/', {
				method: 'POST',
				body: JSON.stringify(formData),
				headers: {
					'Content-Type': 'application/json'
				},
			});
			if (response.status === 201) {
				setSuccess(true);
				setTimeout(() => {
					navigate('/login');
				}, 3000);
			} else if(response.status === 400) {
				const data = await response.json();
				const errors = [];
				for (const error in data) {
					errors.push(data[error]);
				}
				console.log(errors);
			} else {
				setError(true)
			}
			console.log(response)
		} catch (error) {
			console.log(error);
			setError(true)
		}
		return;
	};



	return (
		<div className="hide" id='login-main-div'>
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
				<input name='email' type='text' placeholder='Email' />
				<input name='password' type='password' placeholder='Password' />
				<input name='password' type='password' placeholder='Confirm Password' />

				<button type='submit'>Create Account</button>
			</Form>
		</div>
	);
}

export default Signup;
