import React from 'react';
import { Edit2, Trash } from 'react-feather';
import Checkbox from '../ui/Checkbox';
import Popup from '../ui/Popup';

function Note({ id, title, description, category, completed, updatedAt }) {
	return (
		<div className={`note note--${category}`} data-id={id}>
			<div className="note__header">
				<Checkbox />
				<h2 className="note__title">{title}</h2>
				<button className="note__btn" title="Edit Note">
					<Edit2 size={20} color="currentColor" />
				</button>
				<button className="note__btn" title="Delete Note">
					<Trash size={20} color="currentColor" />
				</button>
			</div>
			<p className="note__description">{description}</p>
			<div className="note__footer">
				<span>{updatedAt}</span>
			</div>
			<Popup />
		</div>
	);
}

export default Note;
