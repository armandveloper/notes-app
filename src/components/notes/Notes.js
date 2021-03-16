import React, { useContext } from 'react';
import { UiContext } from '../../context/UiContext';
import Modal from '../ui/Modal';
import Wrapper from '../layout/Wrapper';
import NotesGrid from './NotesGrid';
import ProgressBar from '../ui/ProgressBar';
import AnyNotes from './AnyNotes';
import NoteForm from './NoteForm';
import { NoteContext } from '../../context/NoteContext';

function Notes() {
	const {
		uiState: { isModalOpen },
	} = useContext(UiContext);

	const { notesState } = useContext(NoteContext);

	const { notes, displayedNotes, completedNotes } = notesState;

	const totalNotes = notes.length;

	const areNotes = totalNotes > 0;
	const areDisplayedNotes = displayedNotes.length > 0;

	return (
		<main className="notes">
			<Wrapper>
				{!areNotes && (
					<AnyNotes title="You don't have any notes" type="noNotes" />
				)}
				{/* Si hay notas pero no las filtradas muestra el mensaje  */}
				{!areDisplayedNotes && areNotes ? (
					<AnyNotes
						title="Couldn't find any notes"
						type="noFilterNotes"
					/>
				) : null}
				{areDisplayedNotes && (
					<>
						<h1 className="heading-1 heading-1--notes">
							{completedNotes === totalNotes
								? 'You have completed all notes'
								: `You have ${completedNotes}/${totalNotes} ${
										totalNotes > 1 ? 'notes ' : 'note '
								  } completed`}
						</h1>
						<ProgressBar
							progress={(completedNotes / totalNotes) * 100}
						/>
						<NotesGrid notes={displayedNotes} />
					</>
				)}
				<Modal
					open={isModalOpen}
					confirmBtn={true}
					cancelBtn={true}
					confirmBtnText="Add"
				>
					<h2 className="heading-2 mt-0">Add Note</h2>
					<NoteForm />
				</Modal>
			</Wrapper>
		</main>
	);
}

export default Notes;
