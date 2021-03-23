import React, { useContext, useState } from 'react';
import { Edit2, Trash } from 'react-feather';
import { UiContext } from '../../context/UiContext';
import { NoteContext } from '../../context/NoteContext';
import { formatDate } from '../../helpers/formatDate';
import Checkbox from '../ui/Checkbox';
import Popup from '../ui/Popup';
import { setIsModalOpen } from '../../actions/ui';
import {
	completeNote,
	setActiveNote,
	setCompletedNotes,
} from '../../actions/note';
import { fetchWithToken } from '../../helpers/fetch';

function Note({ _id, title, description, category, completed, updatedAt }) {
	const { uiState, uiDispatch } = useContext(UiContext);
	const { notesDispatch } = useContext(NoteContext);

	const [isPopupShowing, setPopupShowing] = useState(false);

	const handleComplete = async ({ target }) => {
		const completed = target.checked;

		const resp = await fetchWithToken(
			'notes/complete/' + _id,
			{ completed },
			'PUT'
		);
		if (!resp.success) {
			alert(resp.msg);
			return;
		}
		const { note } = resp;
		const updatedAt = formatDate(note.updatedAt);

		// Actualizar notas
		notesDispatch(completeNote({ _id, completed, updatedAt }));
		notesDispatch(setCompletedNotes());
	};

	return (
		<div
			className={`note note--${category} ${
				completed ? 'note--completed' : ''
			}`}
			data-_id={_id}
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
						notesDispatch(setActiveNote(_id));
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
						notesDispatch(setActiveNote(_id));
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
