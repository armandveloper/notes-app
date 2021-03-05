import React from 'react';
import Header from '../components/layout/Header';
import Navbar from '../components/ui/Navbar';
import Notes from '../components/notes/Notes';

function NotesPage() {
	return (
		<div>
			<Header />
			<Navbar />
			<Notes />
		</div>
	);
}

export default NotesPage;
