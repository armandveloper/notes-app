import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { NoteContext } from '../../context/NoteContext';
import {
	deleteNote,
	setActiveNote,
	setDisplayedNotes,
} from '../../actions/note';
import { UiContext } from '../../context/UiContext';

function Popup({ setPopupShowing }) {
	const { notesState, notesDispatch } = useContext(NoteContext);
	const { uiState } = useContext(UiContext);

	const { activeNote } = notesState;

	const handleDelete = () => {
		notesDispatch(deleteNote(activeNote.id));
		notesDispatch(setDisplayedNotes(uiState.currentTab));
		notesDispatch(setActiveNote());
	};

	return (
		<div className="popup__root">
			<div className="popup" role="dialog">
				<h4 className="popup__text">Delete note?</h4>
				<div className="popup__footer">
					<button
						className="btn btn--text"
						onClick={() => {
							notesDispatch(setActiveNote());
							setPopupShowing(false);
						}}
					>
						Cancel
					</button>
					<button className="btn btn--text" onClick={handleDelete}>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}

Popup.propTypes = {
	setPopupShowing: PropTypes.func.isRequired,
};

export default Popup;
