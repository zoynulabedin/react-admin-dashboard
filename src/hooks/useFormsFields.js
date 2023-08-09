import { useState } from "react";

 const useFormsFields = (initialState) => {
	const [input, setInput] = useState(initialState);

	const handleInputchange = (e) => {
		setInput((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};
	const resetForm = () => {
		setInput(initialState);
	}
	return { input, handleInputchange, resetForm, setInput };
};


export default  useFormsFields ;