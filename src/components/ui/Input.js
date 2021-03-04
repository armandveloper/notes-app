import React from 'react';

function Input(props) {
	const { placeholder, type, value, name } = props;
	return (
		<div className="form__group">
			<input
				type={type}
				className="form__control"
				name={name}
				placeholder={placeholder}
				aria-label={placeholder}
			/>
		</div>
	);
}

export default Input;
