import { createSlice } from "@reduxjs/toolkit";
import {
	createUser,
	loggedInUser,
	loginUser,
	logoutUser,
} from "./authApiSlice";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: localStorage.getItem("user")
			? JSON.parse(localStorage.getItem("user"))
			: null,
		loading: false,
		message: null,
		error: null,
	},
	reducers: {
		setMessageEmpty: (state, action) => {
			state.message = null;
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(createUser.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(createUser.fulfilled, (state, action) => {
			state.message = action.payload.message;
			state.loading = false;
		});
		builder.addCase(createUser.rejected, (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		});

		builder.addCase(loginUser.pending, (state, action) => {
			state.loading = true;
		});

		builder.addCase(loginUser.fulfilled, (state, action) => {
			state.user = action.payload.user;
			state.loading = false;
			state.message = action.payload.message;
		});

		builder.addCase(loginUser.rejected, (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		});
		builder.addCase(logoutUser.pending, (state, action) => {
			state.loading = true;
		});

		builder.addCase(logoutUser.fulfilled, (state, action) => {
			state.loading = false;
			state.message = action.payload.message;
			state.user = null;
			localStorage.removeItem("user");
		});

		builder.addCase(logoutUser.rejected, (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		});

		builder.addCase(loggedInUser.pending, (state, action) => {
			state.loading = true;
		});

		builder.addCase(loggedInUser.fulfilled, (state, action) => {
			console.log(action);
			state.loading = false;
			state.user = action.payload;
			localStorage.setItem("user", JSON.stringify(action.payload));
		});

		builder.addCase(loggedInUser.rejected, (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		});
	},
});

export const { setMessageEmpty } = authSlice.actions;
//export
export default authSlice.reducer;
