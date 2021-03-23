import types from '../types/types';

const initState = {
	notes: [],
	displayedNotes: [],
	activeNote: null,
	completedNotes: 0,
};

export const notesReducer = (state = initState, action) => {
	switch (action.type) {
		case types.NOTE_SET_NOTES: {
			const notesCompleted = action.payload.filter(
				(note) => note.completed
			);
			const notesUnCompleted = action.payload.filter(
				(note) => !note.completed
			);
			return {
				...state,
				notes: [...notesUnCompleted, ...notesCompleted],
				displayedNotes: [...notesUnCompleted, ...notesCompleted],
			};
		}
		case types.NOTE_ADD:
			return { ...state, notes: [{ ...action.payload }, ...state.notes] };
		case types.NOTE_UPDATE:
			return {
				...state,
				notes: state.notes.map((note) =>
					note._id === action.payload._id
						? { ...action.payload }
						: note
				),
			};
		case types.NOTE_COMPLETE: {
			const { _id, completed, updatedAt } = action.payload;
			const notes = state.displayedNotes.filter(
				(note) => note._id !== _id
			);
			const note = state.displayedNotes.find((note) => note._id === _id);
			note.updatedAt = updatedAt;
			note.completed = completed;

			// Si la nota está completada lo agrega al final
			// Pero si de un estado completado se marca de nuevo a incompleto
			// Lo modifica pero no lo agrega al final si no que se queda en su misma posición
			const newNotes = completed
				? [...notes, note]
				: state.displayedNotes.filter((note) =>
						note._id === _id
							? { ...note, updatedAt, completed }
							: note
				  );

			return {
				...state,
				// notes: newNotes,
				displayedNotes: newNotes,
			};
		}
		case types.NOTE_DELETE:
			return {
				...state,
				notes: state.notes.filter(
					(note) => note._id !== action.payload
				),
			};
		case types.NOTE_SET_ACTIVE:
			return {
				...state,
				activeNote:
					state.displayedNotes.find(
						(note) => note._id === action.payload
					) || null,
			};
		case types.NOTE_SET_COMPLETED:
			return {
				...state,
				completedNotes: state.notes.filter((note) => note.completed)
					.length,
			};
		case types.NOTE_SET_DISPLAYED: {
			const displayedNotes =
				action.payload === 'all'
					? state.notes
					: state.notes.filter(
							(note) => note.category === action.payload
					  );
			const completedNotes = displayedNotes.filter(
				(note) => note.completed
			);
			const uncompletedNotes = displayedNotes.filter(
				(note) => !note.completed
			);
			return {
				...state,
				displayedNotes: [...uncompletedNotes, ...completedNotes],
			};
		}
		case types.NOTE_SEARCH: {
			const { category, q } = action.payload;
			return {
				...state,
				displayedNotes: state.notes.filter((note) => {
					const match = note.title
						.toLowerCase()
						.includes(q.toLowerCase());
					// Si la categoría es all devuelve todas las notas sin importar su categoría
					const categoryMatch =
						category === 'all' ? true : note.category === category;

					return match && categoryMatch;
				}),
			};
		}

		default:
			return state;
	}
};
