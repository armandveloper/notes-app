import React from 'react';
import Header from './components/layout/Header';
import Navbar from './components/ui/Navbar';
import Notes from './components/notes/Notes';

function App() {
	return (
		<>
			<Header />
			<Navbar />
			<Notes />
		</>
	);
}

export default App;
