import { configureStore } from "@reduxjs/toolkit";
import products from "./productSlice";
import auth from "./authSlice";
const store = configureStore({
  reducer: { products, auth },
});
export default store;
