import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, type, textTransform = 'none' }) {
	return (
		<button
			className={`btn ${
				type ? `btn--${type}` : ''
			} text-${textTransform}`}
		>
			{children}
		</button>
	);
}

Button.propTypes = {
	type: PropTypes.string,
};

export default Button;
