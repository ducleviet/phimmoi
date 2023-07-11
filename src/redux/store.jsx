import { configureStore } from '@reduxjs/toolkit';
import commentReducer from '../redux/features/comment/commentSlice';

export const store = configureStore({
    reducer: {
        comments: commentReducer,
    },
});
