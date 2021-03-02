import React from 'react';

function AnyNotes() {
	return (
		<div className="notes__any">
			<h1 className="heading-1 text-center">You don't have any notes</h1>
			<img
				src="/img/add-note-illustration.svg"
				alt="Add a note"
				width="259"
				className="img-center"
			/>
		</div>
	);
}

export default AnyNotes;
