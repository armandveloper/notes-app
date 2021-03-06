import React, { useContext } from 'react';
import { Plus } from 'react-feather';
import { UiContext } from '../../context/UiContext';
import Wrapper from '../layout/Wrapper';
import Button from './Button';
import Tabs from './Tabs';

function Navbar() {
	const { setUiState } = useContext(UiContext);

	const handleAddNote = () => {
		setUiState((prevState) => ({ ...prevState, isModalOpen: true }));
	};

	return (
		<Wrapper>
			<nav className="navbar">
				<Tabs />
				<Button
					type="primary"
					textTransform="uppercase"
					onClick={handleAddNote}
				>
					<Plus size={24} color="currentColor" />
					Add Note
				</Button>
			</nav>
		</Wrapper>
	);
}

export default Navbar;
