export const fetchWithoutToken = async (endpoint, data, method = 'GET') => {
	const url = `${process.env.REACT_APP_API_URL}/${endpoint}`;
	try {
		if (method === 'GET') {
			const resp = await fetch(url);
			return await resp.json();
		}
		const resp = await fetch(url, {
			method,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		return await resp.json();
	} catch {
		return {
			success: false,
			msg: 'Error inesperado. Por favor intente nuevamente',
		};
	}
};

export const fetchWithToken = async (endpoint, data, method = 'GET') => {
	const url = `${process.env.REACT_APP_API_URL}/${endpoint}`;
	try {
		const token = localStorage.getItem('token') || '';
		if (method === 'GET') {
			const resp = await fetch(url, { headers: { 'x-token': token } });
			return await resp.json();
		}
		const resp = await fetch(url, {
			method,
			headers: {
				'Content-Type': 'application/json',
				'x-token': token,
			},
			body: JSON.stringify(data),
		});
		return await resp.json();
	} catch {
		return {
			success: false,
			msg: 'Error inesperado. Por favor intente nuevamente',
		};
	}
};
