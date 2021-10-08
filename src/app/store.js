import { configureStore } from '@reduxjs/toolkit';
import authReducer  from '../features/Login/authSlice';
import profileReducer from '../features/Profile/profileSlice';
import createPostReducer from '../features/CreatePost/createPostSlice';
import homeReducer from '../features/Home/homeSlice';
import postReducer from '../features/Post/postSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    userData: profileReducer,
    homeData: homeReducer,
    createPost: createPostReducer,
    post: postReducer
  },
});
