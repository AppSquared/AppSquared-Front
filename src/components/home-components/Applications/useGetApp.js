import { useState, useEffect } from 'react';
import API_URL from '../../../apiConfig';

export default function useGetApp(id) {
	const [application, setApplication] = useState(null);

	const getApplicationDetails = async () => {
		try {
			const response = await fetch(`${API_URL}applications/${id}`);
			if (response.status === 200) {
				const data = await response.json();
				setApplication(data);
			}
		} catch (err) {
			return;
		}
	};

	useEffect(() => {
		getApplicationDetails();
	}, []);

	return application;
}
