import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { NoteContext } from '../../context/NoteContext';

function Popup({ setPopupShowing }) {
	const { activeNote, setAllNotes, setDisplayedNotes } = useContext(
		NoteContext
	);

	const handleDelete = () => {
		setAllNotes((prevNotes) => {
			return prevNotes.filter((note) => note.id !== activeNote.id);
		});
		setDisplayedNotes((prevNotes) => {
			return prevNotes.filter((note) => note.id !== activeNote.id);
		});
	};

	return (
		<div className="popup__root">
			<div className="popup" role="dialog">
				<h4 className="popup__text">Delete note?</h4>
				<div className="popup__footer">
					<button
						className="btn btn--text"
						onClick={() => setPopupShowing(false)}
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
