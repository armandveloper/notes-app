import React, { useRef } from 'react';

// name="username"
//     rules={[{ required: true, message: 'Please input your username!' }]}

function Form(props) {
	const { children, onSubmit, onFinish, onFinishFailed } = props;
	const form = useRef();

	const handleSubmit = () => {
		console.log(form.current);
		onSubmit();
	};

	return (
		<form ref={form} autoComplete="off">
			{children}
		</form>
	);
}

function Item(props) {
	const { name, placeholder, rules, children } = props;
	const component = React.Children.map(children, (child) => {
		// checking isValidElement is the safe way and avoids a typescript error too
		if (React.isValidElement(child)) {
			return React.cloneElement(child, { name, rules, placeholder });
		}
		return child;
	});

	return <>{component}</>;
}

Form.Item = Item;

export default Form;
