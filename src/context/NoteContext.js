import { createContext, useEffect, useState } from 'react';

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
	const [allNotes, setAllNotes] = useState([]);
	const [displayedNotes, setDisplayedNotes] = useState([]);
	const [activeNote, setActiveNote] = useState(null);
	const [completedNotes, setCompletedNotes] = useState(0);

	useEffect(() => {
		setCompletedNotes(allNotes.filter((note) => note.completed).length);
	}, [allNotes]);

	return (
		<NoteContext.Provider
			value={{
				allNotes,
				displayedNotes,
				setAllNotes,
				setDisplayedNotes,
				activeNote,
				setActiveNote,
				completedNotes,
			}}
		>
			{children}
		</NoteContext.Provider>
	);
};
