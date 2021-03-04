import React from 'react';

function Grid({ children, stretch }) {
	return (
		<div className={`grid ${stretch ? 'grid--stretch' : ''}`}>
			{children}
		</div>
	);
}

export default Grid;
