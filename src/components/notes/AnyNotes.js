import React from 'react';

const imgsPath = {
	noNotes: '/notes-app/img/add-note-illustration.svg',
	noFilterNotes: '/notes-app/img/search-image.svg',
};

function AnyNotes({ title, type }) {
	const imgPath = imgsPath[type];
	return (
		<div className="notes__any">
			<h1 className="heading-1 text-center">{title}</h1>
			<img
				src={imgPath}
				alt={title}
				width="259"
				className="img-center"
			/>
		</div>
	);
}

export default AnyNotes;
