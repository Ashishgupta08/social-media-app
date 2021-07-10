import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'
import authReducer  from '../features/Login/authSlice';
import profileReducer from '../features/Profile/profileSlice';
import createPostReducer from '../features/CreatePost/createPostSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    userData: profileReducer,
    createPost: createPostReducer
  },
});
