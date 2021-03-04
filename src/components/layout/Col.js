import React from 'react';

const responsive = ({ xs, sm, md, lg, span }) => {
	const breakpoints = [];
	if (xs) {
		breakpoints.push(`col-xs--${xs}`);
	}

	if (sm) {
		breakpoints.push(`col-sm--${sm}`);
	}

	if (md) {
		breakpoints.push(`col-md--${md}`);
	}

	if (lg) {
		breakpoints.push(`col-lg--${lg}`);
	}

	if (span) {
		breakpoints.push(`col--${span}`);
	}

	// Convirte el arreglo a un string de clases y luego reemplaza las comas por espacios para separar el nombre de las clases
	return breakpoints.toString().replaceAll(',', ' ');
};

function Col({ children, span, xs, sm, md, lg }) {
	const breakpoints = responsive({ span, xs, sm, md, lg });

	return <div className={breakpoints}>{children}</div>;
}

export default Col;
