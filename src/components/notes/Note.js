import React, { useContext, useState } from 'react';
import { Edit2, Trash } from 'react-feather';
import { UiContext } from '../../context/UiContext';
import { NoteContext } from '../../context/NoteContext';
import { formatDate } from '../../helpers/formatDate';

import Checkbox from '../ui/Checkbox';
import Popup from '../ui/Popup';

const completeNotes = (prevNotes, { id, completed, updatedAt }) => {
	const note = prevNotes.find((note) => note.id === id);
	note.completed = completed;
	note.updatedAt = updatedAt;
	const notes = prevNotes.filter((note) => note.id !== id);

	return [...notes, note];
};

function Note({ id, title, description, category, completed, updatedAt }) {
	const { setUiState } = useContext(UiContext);
	const {
		setActiveNote,
		displayedNotes,
		setDisplayedNotes,
		setAllNotes,
	} = useContext(NoteContext);
	const [isPopupShowing, setPopupShowing] = useState(false);

	const handleComplete = ({ target }) => {
		const completed = target.checked;
		const updatedAt = formatDate();
		// Actualizar notas
		setAllNotes((prevNotes) => {
			return completeNotes(prevNotes, { id, completed, updatedAt });
		});

		setDisplayedNotes((prevNotes) => {
			return completeNotes(prevNotes, { id, completed, updatedAt });
		});
	};

	return (
		<div
			className={`note note--${category} ${
				completed ? 'note--completed' : ''
			}`}
			data-id={id}
		>
			<div className="note__header">
				<Checkbox
					onChange={handleComplete}
					completed={completed}
					checked={completed}
				/>
				<h2 className="note__title">{title}</h2>
				<button
					className="note__btn"
					title="Edit Note"
					onClick={() => {
						const note = displayedNotes.find(
							(note) => note.id === id
						);
						setActiveNote(note);
						setUiState((prevState) => ({
							...prevState,
							isModalOpen: true,
						}));
					}}
				>
					<Edit2 size={20} color="currentColor" />
				</button>
				<button
					className="note__btn"
					title="Delete Note"
					onClick={() => {
						const note = displayedNotes.find(
							(note) => note.id === id
						);
						setActiveNote(note);
						setPopupShowing(true);
					}}
				>
					<Trash size={20} color="currentColor" />
				</button>
			</div>
			<p className="note__description">{description}</p>
			<div className="note__footer">
				<span>{updatedAt}</span>
			</div>
			{isPopupShowing && <Popup setPopupShowing={setPopupShowing} />}
		</div>
	);
}

export default Note;
