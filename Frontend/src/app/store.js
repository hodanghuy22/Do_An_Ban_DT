import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/users/userSlice";
import slideshowReducer from '../features/slideshow/slideshowSlice';

export const store = configureStore({
    reducer: {
        auth:authReducer,
        slideshow: slideshowReducer,
    }
})