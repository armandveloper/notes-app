import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import NotesPage from '../../pages/NotesPage';

function AppRouter() {
	return (
		<Router basename="/notes-app">
			<Switch>
				<Route path="/signin" exact={true}>
					<LoginPage />
				</Route>
				<Route path="/signup" exact={true}>
					<RegisterPage />
				</Route>
				<Route path="/" exact={true}>
					<NotesPage />
				</Route>
				<Redirect to="/signin" />
			</Switch>
			{/* <div>
    </div> */}
		</Router>
	);
}

export default AppRouter;
