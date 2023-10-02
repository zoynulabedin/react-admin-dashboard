import { createSlice } from "@reduxjs/toolkit";
import { DeleteBrand, createBrand, getAllBrand, updateStatusBrand } from "./productApiSlice";

const productSlice = createSlice({
	name: "product",
	initialState: {
		product: null,
		brand: null,
		category: false,
		user: null,
		tag: null,
		message: null,
		error: null,
		loader: false,
	},
	reducers: {
		setMessageEmpty: (state, action) => {
			state.message = null;
			state.error = null;
		},
	},
	// create brand
	extraReducers: (builder) => {
		builder.addCase(createBrand.pending, (state, action) => {
			state.message = null;
			state.error = null;
			state.loader = true;
		})
		builder.addCase(createBrand.fulfilled, (state, action) => {
			state.brand = [];
			state.brand.push(action.payload.brand);
			state.message = action.payload.message;
			state.error = null;
			state.loader = false;
		})
		builder.addCase(createBrand.rejected, (state, action) => {
			state.message = null;
			state.error = action.error.message;
			state.loader = false;
		})
		builder.addCase(getAllBrand.pending, (state, action) => {
			state.message = null;
			state.error = null;
			state.loader = true;
		})
		builder.addCase(getAllBrand.fulfilled, (state, action) => {
			state.brand = action.payload;
			state.message = action.payload.message;
			state.error = null;
			state.loader = false;
		})
		builder.addCase(getAllBrand.rejected, (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		})

		builder.addCase(DeleteBrand.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(DeleteBrand.fulfilled, (state, action) => {
			console.log(action.payload);
			state.brand = state.brand.filter(
				(data) => data._id !== action.payload.brand._id
			);
			state.message = action.payload.message;
		});
			
		builder.addCase(DeleteBrand.rejected, (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		});

		builder.addCase(updateStatusBrand.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(updateStatusBrand.fulfilled, (state, action) => {
			state.message = action.payload.message;
			state.brand[
				state.brand.findIndex((data) => data._id == action.payload.brand._id)
			] = action.payload.brand;
			state.loading = false;
		});
		builder.addCase(updateStatusBrand.rejected, (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		});
	},
});
//selector
export const getAllProductDatas = (state) => state.product;
export const { setMessageEmpty } = productSlice.actions;
//export
export default productSlice.reducer;
