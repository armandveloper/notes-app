import React from 'react';

function Input(props) {
	const { placeholder, type, value, name, setNote, autoFocus } = props;
	return (
		<div className="form__group">
			<input
				type={type}
				className="form__control"
				placeholder={placeholder}
				aria-label={placeholder}
				autoFocus={autoFocus}
				tabIndex="1"
				name={name}
				value={value}
				onChange={({ target }) =>
					setNote((prevNote) => ({
						...prevNote,
						[name]: target.value,
					}))
				}
			/>
		</div>
	);
}

export default Input;
