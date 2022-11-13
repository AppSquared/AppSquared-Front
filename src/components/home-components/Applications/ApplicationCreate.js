import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewApplicationForm from './Forms/NewApplicationForm';

function ApplicationCreate({ setShow }) {
	const initialApplicationValues = {
		date_applied: '',
		notes: '',
		status: '',
	};

	const navigate = useNavigate();
	const [newApplication, setNewApplication] = useState(
		initialApplicationValues
	);

	const handleChange = (event) => {
		setNewApplication((prevState) => {
			return { ...prevState, [event.target.name]: event.target.value };
		});
	};

	const createApplication = async (event) => {
		event.preventDefault();
		const formValues = new FormData(event.target);
		try {
			const response = await fetch('http://localhost:8000/applications/', {
				method: 'POST',
				body: formValues,
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			if (response.status === 201) {
				window.location = '/';
			}
		} catch (err) {
			return;
		}
	};

	return (
		<div>
			<NewApplicationForm
				setShow={setShow}
				handleSubmit={createApplication}
				handleChange={handleChange}
				formValues={newApplication}
			/>
		</div>
	);
}

export default ApplicationCreate;
