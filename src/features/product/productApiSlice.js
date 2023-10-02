import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// create brand
export const createBrand = createAsyncThunk(
	"product/createBrand",
	async (data) => {
		
		try {
			const response = await axios.post(
				"http://localhost:5050/api/v1/brand/",
				data,{withCredentials:true}
			);

			return response.data;
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	}
);

// get all product brand
export const getAllBrand = createAsyncThunk("product/getAllBrand", async () => {
	try {
		const response = await axios.get(
			"http://localhost:5050/api/v1/brand/",
			{ withCredentials: true }
		);

		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
});

// delete brand

// get user
export const DeleteBrand = createAsyncThunk("product/DeleteBrand", async (id) => {
	try {
		const response = await axios.delete(
			`http://localhost:5050/api/v1/brand/${id}`,
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
export const updateStatusBrand = createAsyncThunk(
	"product/updateStatusUser",
	async ({ status, id }) => {
		
		try {
			const response = await axios.patch(
				`http://localhost:5050/api/v1/brand/status/${id}`,
				{ status },
				{ withCredentials: true }
			);

			return response.data;
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	}
);
