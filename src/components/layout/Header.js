import React from 'react';
import Wrapper from './Wrapper';
import SearchBox from '../ui/SearchBox';

function Header() {
	return (
		<Wrapper>
			<header className="header">
				<SearchBox />
			</header>
		</Wrapper>
	);
}

export default Header;
