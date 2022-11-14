import { useState, useEffect } from 'react';

export default function useGetContact(id) {
	const [contact, setContact] = useState(null);

	const getContactDetails = async () => {
		try {
			const response = await fetch(`http://localhost:8000/contacts/${id}`);
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
