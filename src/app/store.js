import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";

const store = configureStore({
	reducer: {
		auth: authSlice,
	},
	middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
	devTools: true,
});

export default store;
