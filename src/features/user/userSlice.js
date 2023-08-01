import { createSlice } from "@reduxjs/toolkit";
import {
	createPermission,
	deletePermission,
	getPermission,
	updateStatusPermission,
} from "./userApiSlice";

const userSlice = createSlice({
	name: "user",
	initialState: {
		permission: null,
		role: null,
		loading: false,
		user: null,
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
		builder.addCase(createPermission.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(createPermission.fulfilled, (state, action) => {
			state.message = action.payload.message;
			state.permission.push(action.payload.permission);
			state.loading = false;
		});
		builder.addCase(createPermission.rejected, (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		});

		builder.addCase(getPermission.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(getPermission.fulfilled, (state, action) => {
			state.message = action.payload.message;
			state.permission = action.payload;
			state.loading = false;
		});
		builder.addCase(getPermission.rejected, (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		});

		builder.addCase(deletePermission.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(deletePermission.fulfilled, (state, action) => {
			state.message = action.payload.message;
			state.permission = state.permission.filter(
				(data) => data._id !== action.payload.permission._id
			);
			state.loading = false;
		});
		builder.addCase(deletePermission.rejected, (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		});

		builder.addCase(updateStatusPermission.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(updateStatusPermission.fulfilled, (state, action) => {
			state.message = action.payload.message;
			state.permission[state.permission.findIndex((data) => data._id == action.payload.permission._id)] = action.payload.permission;
			state.loading = false;
		});
		builder.addCase(updateStatusPermission.rejected, (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		});
	},
});
//selector
export const getAllPermissions = (state) => state.user;
export const { setMessageEmpty } = userSlice.actions;
//export
export default userSlice.reducer;
