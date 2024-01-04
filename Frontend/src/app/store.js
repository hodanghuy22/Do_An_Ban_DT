import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/users/userSlice";
import slideshowReducer from '../features/slideshow/slideshowSlice';
import productReducer from "../features/products/productSlice";
import wishlistReducer from "../features/wishlists/wishlistSlice"
import phoneReducer from '../features/phone/phoneSlice';
import capacityReducer from '../features/capacity/capacitySlice';
import colorReducer from '../features/color/colorSlice';
import brandReducer from '../features/brand/brandSlice';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
    reducer: {
        auth:authReducer,
        slideshow: slideshowReducer,
        product: productReducer,
        wishlist: wishlistReducer,
        phone: phoneReducer,
        capacity: capacityReducer,
        color: colorReducer,
        brand: brandReducer,
        cart: cartReducer,
    }
})