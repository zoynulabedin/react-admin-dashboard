import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// create user
export const createUser = createAsyncThunk("auth/createUser", async (data) => {
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

// login user
export const loginUser = createAsyncThunk("auth/loginUser", async (data) => {
	try {
		const response = await axios.post(
			"http://localhost:5050/api/v1/auth/login",
			data,
			{ withCredentials: true }
		);
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
});

// loggout user

// login user
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
	try {
		const response = await axios.post(
			"http://localhost:5050/api/v1/auth/loggout",
			"",
			{ withCredentials: true }
		);
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
});

// login user
export const loggedInUser = createAsyncThunk("auth/loggedInUser", async () => {
	try {
		const response = await axios.get("http://localhost:5050/api/v1/auth/me", {
			withCredentials: true,
		});
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
});
