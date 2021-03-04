import React from 'react';

function Col({ children, span }) {
	return <div className={`col--${span}`}>{children}</div>;
}

export default Col;
