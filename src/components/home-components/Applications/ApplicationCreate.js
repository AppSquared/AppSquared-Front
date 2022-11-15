import { useState } from 'react';
import { navigate, useNavigate } from 'react-router-dom';
import ApplicationForm from './ApplicationForm';
import API_URL from '../../../apiConfig';

function ApplicationCreate({ setCreatedApp, setShow, getApplications }) {
	const initialApplicationValues = {
		job_title: '',
		company_name: '',
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
			const response = await fetch(API_URL + 'applications/', {
				method: 'POST',
				body: formValues,
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			if (response.status === 201) {
				setCreatedApp(true);
				getApplications();
				setCreatedApp(false);
			}
		} catch (err) {
			return;
		}
	};

	return (
		<div>
			<ApplicationForm
				setShow={setShow}
				handleSubmit={createApplication}
				handleChange={handleChange}
				formValues={newApplication}
			/>
		</div>
	);
}

export default ApplicationCreate;
