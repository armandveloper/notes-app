import React from 'react';

function TextArea(props) {
	const { placeholder, value, name, setNote } = props;
	return (
		<div className="form__group">
			<textarea
				className="form__control form__control--multiline"
				placeholder={placeholder}
				aria-label={placeholder}
				name={name}
				value={value}
				onChange={({ target }) =>
					setNote((prevNote) => ({
						...prevNote,
						[name]: target.value,
					}))
				}
			></textarea>
		</div>
	);
}

export default TextArea;
