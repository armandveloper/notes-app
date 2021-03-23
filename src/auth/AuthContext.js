import { createContext, useCallback, useState } from 'react';
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';

export const AuthContext = createContext();

const initState = {
	uid: null,
	checking: true,
	logged: false,
};

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState(initState);

	const signin = async (email, password) => {
		const resp = await fetchWithoutToken(
			'auth/signin',
			{ email, password },
			'POST'
		);
		if (resp.success) {
			const { uid } = resp.user;
			localStorage.setItem('token', resp.token);
			setAuth({
				uid,
				checking: false,
				logged: true,
			});
		}
		return { success: resp.success, msg: resp.msg };
	};

	const signup = async (email, password) => {
		const resp = await fetchWithoutToken(
			'auth/signup',
			{ email, password },
			'POST'
		);
		if (resp.success) {
			const { uid } = resp.user;

			localStorage.setItem('token', resp.token);
			setAuth({
				uid,
				checking: false,
				logged: true,
			});
		}
		return { success: resp.success, msg: resp.msg };
	};

	const verifyToken = useCallback(async () => {
		const token = localStorage.getItem('token');
		if (!token) {
			setAuth({
				uid: null,
				checking: false,
				logged: false,
			});
			return false;
		}

		const resp = await fetchWithToken('auth/renewToken');
		if (resp.success) {
			const { uid } = resp.user;
			localStorage.setItem('token', resp.token);
			setAuth({
				uid,
				checking: false,
				logged: true,
			});
			return true;
		}
		setAuth({
			uid: null,
			checking: false,
			logged: false,
		});
		return false;
	}, []);

	const logout = () => {
		// dispatch({
		// 	type: types.CHAT_UNSET,
		// });
		localStorage.removeItem('token');
		setAuth({
			checking: false,
			logged: false,
		});
	};

	return (
		<AuthContext.Provider
			value={{
				auth,
				signin,
				signup,
				verifyToken,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
