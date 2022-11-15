import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ApplicationForm from './ApplicationForm';
import useGetApp from './useGetApp';
import { Form, Button, Alert } from 'react-bootstrap';
import API_URL from '../../../apiConfig';

function ApplicationEdit({ setShow }) {
	const { id } = useParams();
	let navigate = useNavigate();
	const [formValues, setFormValues] = useState(null);
	const application = useGetApp(id);

	const getApplicationDetail = async () => {
		try {
			const response = await fetch(`${API_URL}applications/${id}`);
			if (response.status === 200) {
				const data = await response.json();
				setFormValues(data);
			}
		} catch (err) {
			return;
		}
	};

	useEffect(() => {
		getApplicationDetail();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		try {
			const response = await fetch(`${API_URL}applications/${id}`, {
				method: 'PUT',
				body: formData,
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});

			if (response.status === 200) {
				navigate(`/applications/${id}`);
			}
		} catch (error) {
			return;
		}
	};

	const handleChange = async (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	if (!formValues) {
		return <h3>loading...</h3>;
	}

	return (
		<div>
			<ApplicationForm
				setShow={setShow}
				handleSubmit={handleSubmit}
				handleChange={handleChange}
				formValues={formValues}
			/>
		</div>
	);
}

export default ApplicationEdit;
