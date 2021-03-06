import React from 'react';
import { NoteProvider } from '../context/NoteContext';
import Header from '../components/layout/Header';
import Navbar from '../components/ui/Navbar';
import Notes from '../components/notes/Notes';

function NotesPage() {
	return (
		<NoteProvider>
			<Header />
			<Navbar />
			<Notes />
		</NoteProvider>
	);
}

export default NotesPage;
