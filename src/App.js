import React from 'react';
import AppRouter from './components/routers/AppRouter';
import { AuthProvider } from './auth/AuthContext';
import { UiProvider } from './context/UiContext';

function App() {
	return (
		<>
			<AuthProvider>
				<UiProvider>
					<AppRouter />
				</UiProvider>
			</AuthProvider>
		</>
	);
}

export default App;
