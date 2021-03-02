import React from 'react';
import { Plus } from 'react-feather';
import Wrapper from '../layout/Wrapper';
import Button from './Button';

function Navbar() {
	return (
		<Wrapper>
			<nav className="navbar">
				<ul className="tab__list" role="tablist">
					<li className="tab__item tab__item--active" role="tab">
						All
					</li>
					<li
						className="tab__item tab__item--custom tab__item--custom-home"
						role="tab"
					>
						Home
					</li>
					<li
						className="tab__item tab__item--custom tab__item--custom-work"
						role="tab"
					>
						Work
					</li>
					<li
						className="tab__item tab__item--custom tab__item--custom-personal"
						role="tab"
					>
						Personal
					</li>
				</ul>
				<Button type="primary" textTransform="uppercase">
					<Plus size={24} color="currentColor" />
					Add Note
				</Button>
			</nav>
		</Wrapper>
	);
}

export default Navbar;
