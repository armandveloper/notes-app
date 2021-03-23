import React, { useContext, useEffect } from 'react';
import { UiContext } from '../../context/UiContext';
import Modal from '../ui/Modal';
import Wrapper from '../layout/Wrapper';
import NotesGrid from './NotesGrid';
import ProgressBar from '../ui/ProgressBar';
import AnyNotes from './AnyNotes';
import NoteForm from './NoteForm';
import { NoteContext } from '../../context/NoteContext';
import { fetchWithToken } from '../../helpers/fetch';
import { setNotes } from '../../actions/note';
import { formatDate } from '../../helpers/formatDate';
import { setCurrentTab } from '../../actions/ui';

function Notes() {
	const {
		uiState: { isModalOpen },
		uiDispatch,
	} = useContext(UiContext);

	const { notesState, notesDispatch } = useContext(NoteContext);

	const { notes, displayedNotes, completedNotes } = notesState;

	const totalNotes = notes.length;

	const areNotes = totalNotes > 0;
	const areDisplayedNotes = displayedNotes.length > 0;

	useEffect(() => {
		const getNotes = async () => {
			const resp = await fetchWithToken('notes');
			if (!resp.success) {
				alert(resp.msg);
				return;
			}
			notesDispatch(
				setNotes(
					resp.notes.map((note) => {
						const {
							_id,
							completed,
							title,
							description,
							category,
							updatedAt,
							user,
						} = note;
						return {
							_id,
							completed,
							title,
							description,
							category,
							updatedAt: formatDate(updatedAt),
							user,
						};
					})
				)
			);
			const lastTab = localStorage.getItem('lastTab') || 'all';
			uiDispatch(setCurrentTab(lastTab));
		};
		getNotes();
	}, [notesDispatch, uiDispatch]);

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
