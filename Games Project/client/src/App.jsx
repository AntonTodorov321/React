import { useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"

import * as authService from './services/authService'
import AuthContext from "./contexts/authContext"
import Path from "./paths"

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import GameList from "./components/game-list/GameList"
import GameCreate from "./components/game-create/GameCreate"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import GameDetails from "./components/game-details/GameDetails"
import Logout from "./components/logout/Logout"

function App() {
	const [auth, setAuth] = useState(() => {
		localStorage.removeItem('accessToken');

		return {};
	});
	const navigate = useNavigate();

	const loginSubmitHandler = async ({ email, password }) => {
		const result = await authService.login(email, password);
		localStorage.setItem('accessToken', result.accessToken);

		setAuth(result);
		navigate(Path.Home);
	};

	const registerSubmitHandler = async ({ email, password }) => {
		const result = await authService.register(email, password);
		localStorage.setItem('accessToken', result.accessToken);

		setAuth(result);
		navigate(Path.Home);
	};

	const logoutHandler = () => {
		setAuth({});
		navigate(Path.Home);
		localStorage.removeItem('accessToken');
	};

	const values = {
		loginSubmitHandler,
		registerSubmitHandler,
		logoutHandler,
		username: auth.username || auth.email,
		email: auth.email,
		isAuthenticated: !!auth.accessToken
	};

	return (
		<AuthContext.Provider value={values}>
			<div id="box">
				<Header />

				<Routes>
					<Route path={Path.Home} element={<Home />} />
					<Route path="/games" element={<GameList />} />
					<Route path="/create" element={<GameCreate />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/games/:gameId" element={<GameDetails />} />
					<Route path={Path.Logout} element={<Logout />} />
				</Routes>

				<Home />
			</div>
		</AuthContext.Provider>
	)
}

export default App
