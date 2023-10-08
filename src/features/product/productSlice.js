import { createSlice } from "@reduxjs/toolkit";
import { DeleteBrand, UpdateSingleBrand, createBrand, createTag, deleteTags, getAllBrand, getTags, updateStatusBrand } from "./productApiSlice";

const productSlice = createSlice({
	name: "product",
	initialState: {
		product: null,
		brand: null,
		category: false,
		user: null,
		tags: null,
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

		builder.addCase(UpdateSingleBrand.pending, (state, action) => {
			state.message = null;
			state.error = null;
			state.loader = true;
		});
		builder.addCase(UpdateSingleBrand.fulfilled, (state, action) => {
			state.message = action.payload.message;
			state.brand[
				state.brand.findIndex((data) => data._id === action.payload.brand._id)
			] = action.payload.brand;
			state.loader = false;
			
		});
		builder.addCase(UpdateSingleBrand.rejected, (state, action) => {
			state.error = action.error.message;
			state.loader = false;
		});

		builder.addCase(getTags.pending, (state, action) => {
			state.message = null;
			state.error = null;
			state.loader = true;
		});
		builder.addCase(getTags.fulfilled, (state, action) => {
			state.tags = action.payload;
			state.message = action.payload.message;
			state.error = null;
			state.loader = false;
			
		});
		builder.addCase(getTags.rejected, (state, action) => {
			state.error = action.error.message;
			state.loader = false;
		});


		builder.addCase(createTag.pending, (state, action) => {
			state.loader = true;
		});
		builder.addCase(createTag.fulfilled, (state, action) => {
			state.tags.push(action.payload.tags);
			state.message = action.payload.message;
			state.loader = false;
		});
		builder.addCase(createTag.rejected, (state, action) => {
			state.error = action.error.message;
			state.loader = false;
		});
	
		builder.addCase(deleteTags.pending, (state, action) => {
			state.loader = true;
		});
		builder.addCase(deleteTags.fulfilled, (state, action) => {
			console.log(action.payload);
			state.tags = state.tags.filter(
				(data) => data._id !== action.payload.tags._id
			);
			state.message = action.payload.message;
			state.loader = false;
		});
		builder.addCase(deleteTags.rejected, (state, action) => {
			state.error = action.error.message;
			state.loader = false;
		});

	},
});
//selector
export const getAllProductDatas = (state) => state.product;
export const { setMessageEmpty } = productSlice.actions;
//export
export default productSlice.reducer;
