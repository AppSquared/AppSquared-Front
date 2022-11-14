import { useState, useEffect } from 'react';
import API_URL from '../../../apiConfig';

export default function useGetContact(id) {
	const [contact, setContact] = useState(null);

	const getContactDetails = async () => {
		try {
			const response = await fetch(`${API_URL}contacts/${id}`);
			if (response.status === 200) {
				const data = await response.json();
				setContact(data);
			}
		} catch (err) {
			return;
		}
	};

	useEffect(() => {
		getContactDetails();
	}, []);

	return contact;
}
