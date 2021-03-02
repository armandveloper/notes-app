import React from 'react';
import { Search } from 'react-feather';

function SearchBox() {
	return (
		<form className="search">
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
			/>
		</form>
	);
}

export default SearchBox;
