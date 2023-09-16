import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { records: [], loading: false, error: null, record: null };
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await fetch("http://localhost:8000/products");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// delete post
export const deleteProducts = createAsyncThunk(
  "products/deleteProducts",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      await fetch(`http://localhost:8000/products/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// add product

export const addProducts = createAsyncThunk(
  "products/addProducts",
  async (product, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;
    const { auth } = getState();
    product.userId = auth.id;
    try {
      const response = await fetch("http://localhost:8000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8 ",
        },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// get product
export const getProduct = createAsyncThunk(
  "products/getPost",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await fetch(`http://localhost:8000/products/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// update product

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (item, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await fetch(
        `http://localhost:8000/products/${item.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json; charset=UTF-8 ",
          },
          body: JSON.stringify(item),
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// add product in cart 


const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearProducts: (state) => {
      state.records = [];
    },
  },
  extraReducers: {
    // fetchProducts
    [fetchProducts.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.records = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // deleteProducts
    [deleteProducts.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [deleteProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.records = state.records.filter(
        (post) => post.id !== action.payload
      );
    },
    [deleteProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // add product
    [addProducts.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [addProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.records.unshift(action.payload);
    },
    [addProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // get product
    [getProduct.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.record = null;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.record = action.payload;
    },
    [getProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // update product
    [updateProduct.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.record = null;
    },
    [updateProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.record = action.payload;
    },
    [updateProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { clearProducts } = productSlice.actions;
export default productSlice.reducer;
