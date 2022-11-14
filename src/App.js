import './App.css';
import Navbar from './components/static-components/Navbar';
import Login from './components/login/login-signup/Login';
import Signup from './components/login/login-signup/Signup';
import Home from './components/home-components/Home';
import ApplicationDetails from './components/home-components/Applications/ApplicationDetails';
import ApplicationEdit from './components/home-components/Applications/ApplicationEdit';
import ContactDetails from './components/home-components/Contacts/ContactDetails';
import ContactEdit from './components/home-components/Contacts/ContactEdit';
import FooterBar from './components/static-components/Footer';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import API_URL from './apiConfig';

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [userInfo, setUserInfo] = useState(null);
	const navigate = useNavigate();

	const handleSetLoggedIn = (token) => {
		localStorage.setItem('token', token);
		setLoggedIn(true);
		getUserInfo();
	};

	const getUserInfo = async () => {
		try {
			const response = await fetch(API_URL + 'users/me/', {
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			if (response.status === 200) {
				const data = await response.json();
				setUserInfo(data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleLogout = async () => {
		try {
			let response = await fetch(API_URL + 'token/logout/', {
				method: 'POST',
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});

			if (response.status === 204) {
				// console.log(loggedIn);
				// console.log(userInfo);
				// console.log(localStorage);
				setLoggedIn(false);
				setUserInfo(null);
				localStorage.removeItem('token');
				navigate('/login');
			}
		} catch (error) {
			console.log(error);
		}
		return;
	};

	useEffect(() => {
		if (localStorage.getItem('token')) {
			setLoggedIn(true);
			getUserInfo();
		}
	}, []);

	return (
		<div className='App'>
			<Navbar
				loggedIn={loggedIn}
				handleLogout={handleLogout}
				userInfo={userInfo}
			/>
			<Routes>
				<Route
					path='/'
					element={<Home userInfo={userInfo} loggedIn={loggedIn} />}
				/>
				<Route
					path='/login'
					element={
						<Login
							setLoggedIn={setLoggedIn}
							handleSetLoggedIn={handleSetLoggedIn}
						/>
					}
				/>
				<Route path='/signup' element={<Signup />} />
				<Route
					path='/applications/:id'
					element={
						<ApplicationDetails userInfo={userInfo} loggedIn={loggedIn} />
					}
				/>
				<Route path='/applications/:id/edit' element={<ApplicationEdit />} />
				<Route
					path='/contacts/:id'
					element={<ContactDetails userInfo={userInfo} loggedIn={loggedIn} />}
				/>
				<Route path='/contacts/:id/edit' element={<ContactEdit />} />
			</Routes>
			{/* <FooterBar /> */}
		</div>
	);
}

export default App;
