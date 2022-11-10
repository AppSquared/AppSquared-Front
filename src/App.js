import './App.css';
import Navbar from './components/static-components/Navbar';
import Login from './components/login/login-signup/Login';
import Signup from './components/login/login-signup/Signup';
import Home from './components/home-components/Home';
import FooterBar from './components/static-components/Footer';

import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
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
			<Navbar setIsLoggedIn={setIsLoggedIn} loggedIn={loggedIn} />
			<Routes>
				<Route path='/' element={<Home loggedIn={loggedIn} />} />
				<Route
					path='/login'
					element={<Login setIsLoggedIn={setIsLoggedIn} loggedIn={loggedIn} />}
				/>
				<Route path='/signup' element={<Signup />} />
			</Routes>
			<FooterBar />
		</div>
	);
}

export default App;
