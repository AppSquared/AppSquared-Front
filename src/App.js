import './App.css';
import Navbar from './components/static-header/Navbar';
import Header from './components/static-header/Header';
import Login from './components/login/login-signup/Login';
import Signup from './components/login/login-signup/Signup';
import Home from './components/home-components/Home';

import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
	const [loggedIn, setIsLoggedIn] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		if (!loggedIn) navigate('/login');
		else navigate('/');
	}, [loggedIn]);

	return (
		<div className='App'>
			<nav>
				<Header setIsLoggedIn={setIsLoggedIn} loggedIn={loggedIn} />
				<Navbar />
			</nav>

			<main>
				<Routes>
					<Route path='/' element={<Home loggedIn={loggedIn} />} />

					<Route
						path='/login'
						element={
							<Login setIsLoggedIn={setIsLoggedIn} loggedIn={loggedIn} />
						}
					/>

					<Route path='/signup' element={<Signup />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
