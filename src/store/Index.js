import { configureStore } from "@reduxjs/toolkit";
import products from "./productSlice";
import auth from "./authSlice";
import cart from "./cartSlice";
const store = configureStore({
  reducer: { products, auth, cart },
});
export default store;
