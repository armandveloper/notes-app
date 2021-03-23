import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../layout/Grid';
import Col from '../layout/Col';
import Note from './Note';

function NotesGrid({ notes }) {
	return (
		<div className="notes__grid">
			<Grid stretch={true}>
				{notes.map((note) => (
					<Col key={note._id} xs={12} sm={6}>
						<Note {...note} />
					</Col>
				))}
			</Grid>
		</div>
	);
}

NotesGrid.propTypes = {
	notes: PropTypes.array.isRequired,
};

export default NotesGrid;
