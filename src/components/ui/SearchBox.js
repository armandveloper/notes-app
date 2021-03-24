import React, { useContext, useState } from 'react';
import { Search } from 'react-feather';
import { searchNotes, setDisplayedNotes } from '../../actions/note';
import { NoteContext } from '../../context/NoteContext';
import { UiContext } from '../../context/UiContext';

function SearchBox() {
	const [search, setSearch] = useState('');

	const { notesDispatch } = useContext(NoteContext);
	const { uiState } = useContext(UiContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search.trim()) {
			notesDispatch(setDisplayedNotes(uiState.currentTab));
			return;
		}
		notesDispatch(searchNotes(search.trim(), uiState.currentTab));
		setSearch('');
	};

	return (
		<form className="search" onSubmit={handleSubmit}>
			<button
				type="submit"
				aria-label="Search"
				title="Search"
				className="search__btn"
			>
				<Search size={20} color="currentColor" />
			</button>
			<input
				type="text"
				autoComplete="off"
				className="search__input"
				name="search"
				aria-label="Search notes"
				placeholder="Search notes..."
				value={search}
				onChange={({ target }) => setSearch(target.value)}
			/>
		</form>
	);
}

export default SearchBox;
