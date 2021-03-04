import React from 'react';
import Grid from '../layout/Grid';
import Col from '../layout/Col';
import Note from './Note';

function NotesGrid() {
	const notes = [
		{
			id: '1',
			title: 'Nota 1',
			description: 'Descripcioón de la nota 1',
			completed: false,
			category: 'home',
			updatedAt: new Date().toString(),
		},
		{
			id: '2',
			title: 'Nota 2',

			description:
				'Descripcioón de la nota 2  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam perferendis quibusdam ullam cumque quod, dolore, maiores alias maxime explicabo architecto fuga vero aliquam harum mollitia dolorem, nesciunt eum? Aliquid, quasi.',
			completed: false,
			category: 'work',
			updatedAt: new Date().toString(),
		},
		{
			id: '3',
			title: 'Nota 3',
			description: 'Descripcioón de la nota 3',
			completed: true,
			category: 'personal',
			updatedAt: new Date().toString(),
		},
		{
			id: '4',
			title: 'Nota 4',
			description: 'Descripcioón de la nota 4',
			completed: false,
			category: 'work',
			updatedAt: new Date().toString(),
		},
		{
			id: '5',
			title: 'Nota 5',
			description: 'Descripcioón de la nota 5',
			completed: true,
			category: 'home',
			updatedAt: new Date().toString(),
		},
		{
			id: '6',
			title: 'Nota 6',
			description: 'Descripcioón de la nota 6',
			completed: false,
			category: 'home',
			updatedAt: new Date().toString(),
		},
		{
			id: '7',
			title: 'Nota 7',
			description: 'Descripcioón de la nota 7',
			completed: false,
			category: 'personal',
			updatedAt: new Date().toString(),
		},
	];
	return (
		<div className="notes__grid">
			<Grid stretch={true}>
				{notes.map((note) => (
					<Col key={note.id} xs={12} sm={6}>
						<Note {...note} />
					</Col>
				))}
			</Grid>
		</div>
	);
}

export default NotesGrid;
