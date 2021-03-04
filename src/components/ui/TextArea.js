import React from 'react';

function TextArea(props) {
	const { placeholder, value, name } = props;
	return (
		<div className="form__group">
			<textarea
				name={name}
				className="form__control form__control--multiline"
				placeholder={placeholder}
				aria-label={placeholder}
			></textarea>
		</div>
	);
}

export default TextArea;
