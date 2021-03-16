import types from '../types/types';

export const setIsModalOpen = (isOpen) => ({
	type: types.UI_SET_IS_MODAL_OPEN,
	payload: !isOpen,
});

export const setCurrentTab = (currentTab) => ({
	type: types.UI_SET_CURRENT_TAB,
	payload: currentTab,
});
