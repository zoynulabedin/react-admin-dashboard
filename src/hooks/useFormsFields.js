import { useState } from "react";

export const useFormsFields = (initialState) => {
	const [input, setInput] = useState(initialState);

	const handleInputchange = (e) => {
		setInput((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};
	return { input, handleInputchange };
};
