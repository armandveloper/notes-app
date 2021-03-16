import { createContext, useContext, useEffect, useReducer } from 'react';
import { setCompletedNotes, setDisplayedNotes } from '../actions/note';
import { notesReducer } from '../reducers/notesReducer';
import { UiContext } from './UiContext';

const initState = {
	notes: [],
	displayedNotes: [],
	activeNote: null,
	completedNotes: 0,
};

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
	const [notesState, notesDispatch] = useReducer(notesReducer, initState);

	const { notes } = notesState;

	const {
		uiState: { currentTab },
	} = useContext(UiContext);

	useEffect(() => {
		notesDispatch(setCompletedNotes());
	}, [notes]);

	useEffect(() => {
		notesDispatch(setDisplayedNotes(currentTab));
	}, [notesDispatch, currentTab]);

	return (
		<NoteContext.Provider
			value={{
				notesState,
				notesDispatch,
			}}
		>
			{children}
		</NoteContext.Provider>
	);
};
