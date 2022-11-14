const API_URL =
	window.location.hostname === 'localhost'
		? 'http://localhost:8000/'
		: 'https://appsquared-db.herokuapp.com/';

export default API_URL;
