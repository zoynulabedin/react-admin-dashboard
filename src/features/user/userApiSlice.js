import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// create permission
export const createPermission = createAsyncThunk(
	"user/createPermission",
	async (data) => {
		try {
			const response = await axios.post(
				"http://localhost:5050/api/v1/permission",
				data
			);

			return response.data;
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	}
);

// get permissions
export const getPermission = createAsyncThunk(
	"user/getPermission",
	async () => {
		try {
			const response = await axios.get(
				"http://localhost:5050/api/v1/permission",
				{ withCredentials: true }
			);

			return response.data;
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	}
);

// delete permission
export const deletePermission = createAsyncThunk(
	"user/deletePermission",
	async (id) => {
		try {
			const response = await axios.delete(
				`http://localhost:5050/api/v1/permission/${id}`,
				{ withCredentials: true }
			);

			return response.data;
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	}
);

// status update3 permission
export const updateStatusPermission = createAsyncThunk(
	"user/updateStatusPermission",
	async ({ status, id }) => {
		console.log(status, id);
		try {
			const response = await axios.patch(
				`http://localhost:5050/api/v1/permission/status/${id}`,
				{ status },
				{ withCredentials: true }
			);

			return response.data;
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	}
);

// create permission
export const createRole = createAsyncThunk("user/createRole", async (data) => {
	console.log(data);
	try {
		const response = await axios.post(
			"http://localhost:5050/api/v1/role",
			data,
			{ withCredentials: true }
		);

		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
});

// get permissions
export const getAllRole = createAsyncThunk("user/getAllRole", async () => {
	try {
		const response = await axios.get("http://localhost:5050/api/v1/role", {
			withCredentials: true,
		});

		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
});

// get permissions
export const DeleteRole = createAsyncThunk("user/DeleteRole", async (id) => {
	try {
		const response = await axios.delete(
			`http://localhost:5050/api/v1/role/${id}`,
			{
				withCredentials: true,
			}
		);

		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
});

// status update3 permission
export const updateStatusRole = createAsyncThunk(
	"user/updateStatusRole",
	async ({ status, id }) => {
		console.log(status, id);
		try {
			const response = await axios.patch(
				`http://localhost:5050/api/v1/role/status/${id}`,
				{ status },
				{ withCredentials: true }
			);

			return response.data;
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	}
);

// status update3 permission
export const updateRole = createAsyncThunk("user/updateRole", async (data) => {
	try {
		const response = await axios.put(
			`http://localhost:5050/api/v1/role/${data.id}`,
			data,
			{ withCredentials: true }
		);

		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
});

// user create

export const createUser = createAsyncThunk("user/createUser", async (data) => {
	try {
		const response = await axios.post(
			"http://localhost:5050/api/v1/user/",
			data
		);

		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
});
