import types from '../types/types';

export const uiReducer = (state, action) => {
	switch (action.type) {
		case types.UI_SET_IS_MODAL_OPEN:
			return { ...state, isModalOpen: action.payload };
		case types.UI_SET_CURRENT_TAB:
			return { ...state, currentTab: action.payload };
		case types.UI_UNSET:
			return { isModalOpen: false, currentTab: 'all' };
		default:
			return state;
	}
};
