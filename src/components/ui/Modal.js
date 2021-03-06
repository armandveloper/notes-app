import React, { useContext } from 'react';
import { UiContext } from '../../context/UiContext';
import Wrapper from '../layout/Wrapper';

function Modal(props) {
	const { setUiState } = useContext(UiContext);

	const { open, children } = props;
	const closeModal = () =>
		setUiState((prevState) => ({
			...prevState,
			isModalOpen: false,
		}));

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
