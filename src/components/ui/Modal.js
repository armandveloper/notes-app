import React, { useContext } from 'react';
import { setActiveNote } from '../../actions/note';
import { setIsModalOpen } from '../../actions/ui';
import { NoteContext } from '../../context/NoteContext';
import { UiContext } from '../../context/UiContext';
import Wrapper from '../layout/Wrapper';

function Modal(props) {
	const { uiState, uiDispatch } = useContext(UiContext);
	const { notesState, notesDispatch } = useContext(NoteContext);

	const { isModalOpen } = uiState;
	const { activeNote } = notesState;

	const { open, children } = props;

	const closeModal = () => {
		uiDispatch(setIsModalOpen(isModalOpen));
		if (activeNote) {
			notesDispatch(setActiveNote());
		}
	};

	const handleClose = (e) => {
		if (e.target.classList.contains('modal__root')) {
			closeModal();
		}
	};

	return (
		open && (
			<div className="modal__root" role="dialog" onClick={handleClose}>
				<Wrapper>
					<div className="modal">{children}</div>
				</Wrapper>
			</div>
		)
	);
}

export default Modal;
