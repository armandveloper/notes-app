import React, { useState, useContext } from 'react';
import { nanoid } from 'nanoid';
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

const initialNote = {
	title: '',
	category: '',
	description: '',
};

function NoteForm() {
	const { uiState, uiDispatch } = useContext(UiContext);
	const { notesState, notesDispatch } = useContext(NoteContext);
	const { activeNote } = notesState;
	const [note, setNote] = useState(activeNote || initialNote);
	const { title, category, description } = note;

	const closeModal = () => {
		uiDispatch(setIsModalOpen(uiState.isModalOpen));
		if (activeNote) {
			notesDispatch(setActiveNote());
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!title.trim() || !description.trim() || !category.trim()) {
			return;
		}

		const id = nanoid();
		const updatedAt = formatDate();

		// Actualiza las notas
		if (activeNote) {
			notesDispatch(
				updateNote({
					...activeNote,
					title,
					category,
					description,
					updatedAt,
				})
			);
		} else {
			// Agrega la nueva nota
			notesDispatch(
				addNote({
					id,
					title,
					category,
					description,
					completed: false,
					updatedAt,
				})
			);
		}

		// // Si estamos en la pestaña de todas las notas. También actualice ese estado
		if (uiState.currentTab === 'all') {
			notesDispatch(setDisplayedNotes(uiState.currentTab));
		}

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
