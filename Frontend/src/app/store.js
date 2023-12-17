import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/users/userSlice";
import slideshowReducer from '../features/slideshow/slideshowSlice';
import productReducer from "../features/products/productSlice";

export const store = configureStore({
    reducer: {
        auth:authReducer,
        slideshow: slideshowReducer,
        product: productReducer,
    }
})