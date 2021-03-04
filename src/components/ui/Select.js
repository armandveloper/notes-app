import React, { useRef, useState } from 'react';

function Select(props) {
	const { options, selectHeader } = props;
	const [selectOption, setSelectOption] = useState({
		value: '',
		text: selectHeader,
	});

	const { text } = selectOption;

	const selectRef = useRef();

	const toggleSelect = () => {
		selectRef.current.classList.toggle('open');
	};

	const handleSelectChange = (value, text) => {
		console.log('el select ahora tiene el valor:', value);
		selectRef.current.classList.remove('open');
		setSelectOption({ value, text });
	};

	return (
		<div className="form__control select" ref={selectRef}>
			<div className="select__header" onClick={toggleSelect}>
				{text}
				<span className="select__arrow">&#9660;</span>
			</div>
			<ul className="select__list hide">
				{options.map(({ text, value }) => (
					<li
						data-value={value}
						className="select__item"
						key={value}
						onClick={() => {
							handleSelectChange(value, text);
						}}
					>
						{text}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Select;