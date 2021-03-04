import React from 'react';
import Wrapper from '../layout/Wrapper';

function Modal(props) {
	const {
		open,
		confirmBtn,
		cancelBtn,
		confirmBtnText,
		cancelBtnText,
		children,
		onConfirm,
	} = props;

	return (
		open && (
			<div className="modal__root" role="dialog">
				<Wrapper>
					<div className="modal">
						{children}
						<div className="modal__footer">
							{cancelBtn && (
								<button className="btn btn--text">
									{cancelBtnText}
								</button>
							)}
							{confirmBtn && (
								<button
									className="btn btn--text"
									onClick={onConfirm}
								>
									{confirmBtnText}
								</button>
							)}
						</div>
					</div>
				</Wrapper>
			</div>
		)
	);
}

Modal.defaultProps = {
	confirmBtn: true,
	cancelBtn: false,
	confirmBtnText: 'Ok',
	cancelBtnText: 'Cancel',
};

export default Modal;
