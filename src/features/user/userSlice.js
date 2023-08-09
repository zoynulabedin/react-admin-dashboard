import { createSlice } from "@reduxjs/toolkit";
import {
	DeleteRole,
	createPermission,
	createRole,
	createUser,
	deletePermission,
	getAllRole,
	getPermission,
	updateRole,
	updateStatusPermission,
	updateStatusRole,
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
			state.permission = action.permission ?? [];
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
			state.permission[
				state.permission.findIndex(
					(data) => data._id == action.payload.permission._id
				)
			] = action.payload.permission;
			state.loading = false;
		});
		builder.addCase(updateStatusPermission.rejected, (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		});
		builder.addCase(createRole.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(createRole.fulfilled, (state, action) => {
			state.role = action.role ?? [];
			state.message = action.payload.message;
			state.role.push(action.payload.role);
		});
		builder.addCase(createRole.rejected, (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		});
		builder.addCase(getAllRole.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(getAllRole.fulfilled, (state, action) => {
			state.message = action.payload.message;
			state.role = action.payload;
		});
		builder.addCase(getAllRole.rejected, (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		});

		builder.addCase(DeleteRole.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(DeleteRole.fulfilled, (state, action) => {
			console.log(action);
			state.role = state.role.filter(
				(data) => data._id !== action.payload.role._id
			);
			state.message = action.payload.message;
		});
		builder.addCase(DeleteRole.rejected, (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		});
		builder.addCase(updateStatusRole.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(updateStatusRole.fulfilled, (state, action) => {
			state.message = action.payload.message;
			state.role[
				state.role.findIndex((data) => data._id == action.payload.role._id)
			] = action.payload.role;
			state.loading = false;
		});
		builder.addCase(updateStatusRole.rejected, (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		});
		builder.addCase(updateRole.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(updateRole.fulfilled, (state, action) => {
			state.message = action.payload.message;

			state.role[
				state.role.findIndex((data) => data._id == action.payload.role._id)
			] = action.payload.role;
			state.loading = false;
		});
		builder.addCase(updateRole.rejected, (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		});

		builder.addCase(createUser.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(createUser.fulfilled, (state, action) => {
			state.user = action.user ?? [];
			state.message = action.payload.message;
			state.role.push(action.payload.role);
		});
		builder.addCase(createUser.rejected, (state, action) => {
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
