import React from 'react';

function Popup() {
	return (
		<div className="popup__root">
			<div className="popup" role="dialog">
				<h4 className="popup__text">Delete note?</h4>
				<div className="popup__footer">
					<button className="btn btn--text">Cancel</button>
					<button className="btn btn--text">Delete</button>
				</div>
			</div>
		</div>
	);
}

export default Popup;
