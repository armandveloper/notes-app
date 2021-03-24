import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { UiContext } from '../../context/UiContext';
import { NoteContext } from '../../context/NoteContext';
import { formatDate } from '../../helpers/formatDate';
import Grid from '../layout/Grid';
import Col from '../layout/Col';
import Input from '../ui/Input';
import Select from '../ui/Select';
import TextArea from '../ui/TextArea';
import { setIsModalOpen } from '../../actions/ui';
import {
	addNote,
	setActiveNote,
	setDisplayedNotes,
	updateNote,
} from '../../actions/note';
import { fetchWithToken } from '../../helpers/fetch';
import { AuthContext } from '../../auth/AuthContext';

const initialNote = {
	title: '',
	category: '',
	description: '',
};

function NoteForm() {
	const { uiState, uiDispatch } = useContext(UiContext);
	const { notesState, notesDispatch } = useContext(NoteContext);
	const { auth } = useContext(AuthContext);
	const { activeNote } = notesState;
	const [note, setNote] = useState(activeNote || initialNote);
	const { title, category, description } = note;

	const closeModal = () => {
		uiDispatch(setIsModalOpen(uiState.isModalOpen));
		if (activeNote) {
			notesDispatch(setActiveNote());
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!title.trim() || !description.trim() || !category.trim()) {
			return;
		}
		// Actualiza las notas
		if (activeNote) {
			const resp = await fetchWithToken(
				'notes/' + activeNote._id,
				{
					title,
					description,
					category,
				},
				'PUT'
			);

			if (!resp.success) {
				return Swal.fire('Error', resp.msg, 'error');
			}
			const { note } = resp;
			const updatedAt = formatDate(note.updatedAt);
			notesDispatch(
				updateNote({
					...activeNote,
					title: note.title,
					category: note.category,
					description: note.description,
					updatedAt,
				})
			);

			notesDispatch(setDisplayedNotes(uiState.currentTab));

			// Limpia el estado
			setNote(initialNote);
			notesDispatch(setActiveNote(null));

			// Oculta el modal
			closeModal();
			return;
		}

		// Agrega la nueva nota

		const resp = await fetchWithToken(
			'notes',
			{
				title,
				description,
				category,
				user: auth.uid,
			},
			'POST'
		);

		if (!resp.success) {
			return Swal.fire('Error', resp.msg, 'error');
		}
		const { note } = resp;
		const updatedAt = formatDate(note.updatedAt);
		notesDispatch(
			addNote({
				_id: note._id,
				title: note.title,
				category: note.category,
				description: note.description,
				completed: note.completed,
				updatedAt,
			})
		);

		notesDispatch(setDisplayedNotes(uiState.currentTab));

		// Limpia el estado
		setNote(initialNote);
		notesDispatch(setActiveNote(null));

		// Oculta el modal
		closeModal();
	};

	return (
		<form onSubmit={handleSubmit} autoComplete="off">
			<Grid>
				<Col xs={12} sm={6} lg={8}>
					<Input
						name="title"
						value={title}
						setNote={setNote}
						type="text"
						placeholder="Add title..."
						autoFocus={true}
					/>
				</Col>
				<Col xs={12} sm={6} lg={4}>
					<Select
						selectHeader={category ? category : 'Select Category'}
						options={[
							{ text: 'Home', value: 'home' },
							{ text: 'Work', value: 'work' },
							{
								text: 'Personal',
								value: 'personal',
							},
						]}
						name="category"
						value={category}
						setNote={setNote}
					/>
				</Col>
				<Col xs={12} lg={8}>
					<TextArea
						placeholder="Add description..."
						name="description"
						value={description}
						setNote={setNote}
					/>
				</Col>
			</Grid>
			<div className="modal__footer">
				<button
					type="button"
					className="btn btn--text"
					onClick={closeModal}
				>
					Cancel
				</button>
				<button
					className="btn btn--text"
					// onClick={() => onConfirm()}
				>
					{activeNote ? 'Update' : 'Add'}
				</button>
			</div>
		</form>
	);
}

export default NoteForm;
