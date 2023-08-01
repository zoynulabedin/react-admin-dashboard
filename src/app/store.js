import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer,
	},
	middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
	devTools: true,
});

export default store;
