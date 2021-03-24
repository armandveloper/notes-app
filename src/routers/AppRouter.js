import React, { useContext, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import NotesPage from '../pages/NotesPage';
import Spinner from '../components/ui/Spinner';

function AppRouter() {
	const { verifyToken, auth } = useContext(AuthContext);

	useEffect(() => {
		verifyToken();
	}, [verifyToken]);

	if (auth.checking) {
		return (
			<div className="overlay">
				<Spinner />
			</div>
		);
	}

	return (
		<Router basename="/notes-app">
			<div>
				<Switch>
					{!auth.logged ? (
						<>
							<Route path="/signin" exact={true}>
								<LoginPage />
							</Route>
							<Route path="/signup" exact={true}>
								<RegisterPage />
							</Route>
							<Redirect to="/signin" />
						</>
					) : (
						<>
							<Route path="/" exact={true}>
								<NotesPage />
							</Route>
							<Redirect to="/" />
						</>
					)}
				</Switch>
			</div>
		</Router>
	);
}

export default AppRouter;
