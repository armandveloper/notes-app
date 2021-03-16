import React, { useContext, useState } from 'react';
import { Edit2, Trash } from 'react-feather';
import { UiContext } from '../../context/UiContext';
import { NoteContext } from '../../context/NoteContext';
import { formatDate } from '../../helpers/formatDate';
import Checkbox from '../ui/Checkbox';
import Popup from '../ui/Popup';
import { setIsModalOpen } from '../../actions/ui';
import { completeNote, setActiveNote } from '../../actions/note';

function Note({ id, title, description, category, completed, updatedAt }) {
	const { uiState, uiDispatch } = useContext(UiContext);
	const { notesDispatch } = useContext(NoteContext);

	const [isPopupShowing, setPopupShowing] = useState(false);

	const handleComplete = ({ target }) => {
		const completed = target.checked;
		const updatedAt = formatDate();

		// Actualizar notas
		notesDispatch(completeNote({ id, completed, updatedAt }));

		// setDisplayedNotes((prevNotes) => {
		// 	return completeNotes(prevNotes, { id, completed, updatedAt });
		// });
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
						notesDispatch(setActiveNote(id));
						uiDispatch(setIsModalOpen(uiState.isModalOpen));
					}}
				>
					<Edit2 size={20} color="currentColor" />
				</button>
				<button
					className="note__btn"
					title="Delete Note"
					onClick={() => {
						// Coloca activa la nota para que en el popup se puede identificarla
						notesDispatch(setActiveNote(id));
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
