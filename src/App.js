import './App.css';
import Navbar from './components/static-components/Navbar';
import Login from './components/login/login-signup/Login';
import Signup from './components/login/login-signup/Signup';
import Home from './components/home-components/Home';
import FooterBar from './components/static-components/Footer';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

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
			const response = await fetch('http://localhost:8000/users/me/', {
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
			const response = await fetch('http://localhost:8000/token/logout/', {
				method: 'POST',
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});

			if (response.status === 204) {
				setLoggedIn(false);
				setUserInfo(null);
				localStorage.removeItem('token');
				alert('You have been logged out!');
				navigate('/');
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
				<Route path='/' element={<Home loggedIn={loggedIn} />} />
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
				{/* 
				<Route path='/applications' element={<Applications />} />
				<Route
					path='/applications/new'
					element={ApplicationCreate}
					loggedIn={loggedIn}
				/>
				<Route
					path='/applications/:id'
					element={
						<ApplicationDetail userInfo={userInfo} loggedIn={loggedIn} />
					}
				/>
				<Route path='/applications/:id/edit' element={ApplicationEdit} /> */}
			</Routes>
			<FooterBar />
		</div>
	);
}

export default App;
