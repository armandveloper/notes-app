import React, { useContext } from 'react';
import { setCurrentTab } from '../../actions/ui';
import { UiContext } from '../../context/UiContext';

const tabs = ['home', 'work', 'personal'];

function Tabs() {
	const {
		uiState: { currentTab },
		uiDispatch,
	} = useContext(UiContext);

	const handleClick = ({ target }) => {
		const { tab } = target.dataset;
		uiDispatch(setCurrentTab(tab));
	};

	return (
		<ul className="tab__list" role="tablist">
			<li
				data-tab="all"
				onClick={handleClick}
				className={`tab__item ${
					currentTab === 'all' ? 'tab__item--active' : ''
				}`}
				role="tab"
			>
				All
			</li>
			{tabs.map((tab) => (
				<li
					key={tab}
					data-tab={tab}
					onClick={handleClick}
					className={`tab__item tab__item--custom tab__item--custom-${tab} ${
						currentTab === tab ? 'tab__item--active' : ''
					}`}
					role="tab"
				>
					{tab}
				</li>
			))}
		</ul>
	);
}

export default Tabs;
