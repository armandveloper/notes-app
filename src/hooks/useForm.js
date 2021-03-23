import { useState } from 'react';

export const useForm = (initState = {}) => {
	const [form, setForm] = useState(initState);

	const reset = () => {
		setForm(initState);
	};

	const handleFormChange = ({ target }) => {
		setForm({
			...form,
			[target.name]: target.value,
		});
	};

	return [form, handleFormChange, reset];
};
