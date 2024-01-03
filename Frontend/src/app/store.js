import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/users/userSlice";
import slideshowReducer from '../features/slideshow/slideshowSlice';
import productReducer from "../features/products/productSlice";
import wishlistReducer from "../features/wishlists/wishlistSlice"
import phoneReducer from '../features/phone/phoneSlice';

export const store = configureStore({
    reducer: {
        auth:authReducer,
        slideshow: slideshowReducer,
        product: productReducer,
        wishlist: wishlistReducer,
        phone: phoneReducer,
    }
})