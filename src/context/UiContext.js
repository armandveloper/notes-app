import { createContext, useState } from 'react';

const initialState = {
	isModalOpen: false,
	currentTab: 'all',
};
export const UiContext = createContext();

export const UiProvider = ({ children }) => {
	const [uiState, setUiState] = useState(initialState);
	return (
		<UiContext.Provider value={{ uiState, setUiState }}>
			{children}
		</UiContext.Provider>
	);
};
