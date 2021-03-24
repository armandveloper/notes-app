import React, { useContext } from 'react';
import Wrapper from './Wrapper';
import SearchBox from '../ui/SearchBox';
import { LogOut } from 'react-feather';
import { UiContext } from '../../context/UiContext';
import { unsetUi } from '../../actions/ui';
import { NoteContext } from '../../context/NoteContext';
import { unsetNotes } from '../../actions/note';
import { AuthContext } from '../../auth/AuthContext';

function Header() {
	const { uiDispatch } = useContext(UiContext);
	const { notesDispatch } = useContext(NoteContext);
	const { logout } = useContext(AuthContext);

	const handleLogout = () => {
		// Limpiar ui
		uiDispatch(unsetUi());
		// Limpiar notes
		notesDispatch(unsetNotes());
		// Limpiar auth
		logout();
	};

	return (
		<Wrapper>
			<header className="header">
				<div className="header__top">
					<button className="btn btn--danger" onClick={handleLogout}>
						<LogOut size={20} color="currentColor" />
						Log Out
					</button>
				</div>
				<SearchBox />
			</header>
		</Wrapper>
	);
}

export default Header;
