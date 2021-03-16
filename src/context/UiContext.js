import { createContext, useReducer } from 'react';
import { uiReducer } from '../reducers/uiReducer';

const initialState = {
	isModalOpen: false,
	currentTab: 'all',
};

export const UiContext = createContext();

export const UiProvider = ({ children }) => {
	const [uiState, uiDispatch] = useReducer(uiReducer, initialState);

	return (
		<UiContext.Provider value={{ uiState, uiDispatch }}>
			{children}
		</UiContext.Provider>
	);
};
