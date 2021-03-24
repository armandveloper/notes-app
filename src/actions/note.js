import types from '../types/types';

export const updateNote = (note) => ({
	type: types.NOTE_UPDATE,
	payload: note,
});

export const addNote = (note) => ({
	type: types.NOTE_ADD,
	payload: note,
});

export const setNotes = (notes) => ({
	type: types.NOTE_SET_NOTES,
	payload: notes,
});

export const setActiveNote = (id) => ({
	type: types.NOTE_SET_ACTIVE,
	payload: id,
});

export const setCompletedNotes = () => ({
	type: types.NOTE_SET_COMPLETED,
});

export const setDisplayedNotes = (category) => ({
	type: types.NOTE_SET_DISPLAYED,
	payload: category,
});

export const completeNote = (completed) => ({
	type: types.NOTE_COMPLETE,
	payload: completed,
});

export const deleteNote = (id) => ({
	type: types.NOTE_DELETE,
	payload: id,
});

export const searchNotes = (q, category) => ({
	type: types.NOTE_SEARCH,
	payload: { q, category },
});

export const unsetNotes = () => ({
	type: types.NOTE_UNSET,
});
