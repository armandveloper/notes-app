import types from '../types/types';

/*
{
  isModalOpen: false,
}
*/

export const uiReducer = (state, action) => {
	switch (action.type) {
		case types.UI_SET_IS_MODAL_OPEN:
			return { ...state, isModalOpen: action.payload };
		case types.UI_SET_CURRENT_TAB:
			return { ...state, currentTab: action.payload };
		default:
			return state;
	}
};
