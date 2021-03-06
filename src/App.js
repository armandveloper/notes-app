import React from 'react';
import AppRouter from './components/routers/AppRouter';
import { UiProvider } from './context/UiContext';

function App() {
	return (
		<>
			<UiProvider>
				<AppRouter />
			</UiProvider>
		</>
	);
}

export default App;
