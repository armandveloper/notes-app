import React from 'react';

// title: You don't have any notes
// type: noNotes

// title: Couldn't find any notes
// type: noFilterNotes

const imgsPath = {
	noNotes: '/img/add-note-illustration.svg',
	noFilterNotes: '/img/search-image.svg',
};

function AnyNotes({ title, type }) {
	const imgPath = imgsPath[type];
	return (
		<div className="notes__any">
			<h1 className="heading-1 text-center">{title}</h1>
			<img
				src={imgPath}
				alt="No notes"
				width="259"
				className="img-center"
			/>
		</div>
	);
}

export default AnyNotes;
