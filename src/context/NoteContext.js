import { createContext, useState } from 'react';

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
	const [allNotes, setAllNotes] = useState([]);
	const [displayedNotes, setDisplayedNotes] = useState([]);
	const [activeNote, setActiveNote] = useState(null);

	return (
		<NoteContext.Provider
			value={{
				allNotes,
				displayedNotes,
				setAllNotes,
				setDisplayedNotes,
				activeNote,
				setActiveNote,
			}}
		>
			{children}
		</NoteContext.Provider>
	);
};
