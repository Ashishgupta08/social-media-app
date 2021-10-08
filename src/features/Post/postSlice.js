import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../Utils/baseUrl";

export const increaseLike = createAsyncThunk('postSlice/increaseLike', async ({token, postedBy, postId}) => {
    const url = baseUrl();
    const postData = { postedBy: postedBy, postId: postId };
    const axiosConfig = { headers: { Authorization: token } };
    const res = await axios.post(`${url}/post/like`, postData, axiosConfig);
    return res
})

export const decreaseLike = createAsyncThunk('postSlice/decreaseLike', async ({token, postedBy, postId}) => {
    const url = baseUrl();
    const res = await axios.delete(`${url}/post/unlike`, { headers: { Authorization: token }, data: { postedBy: postedBy, postId: postId } });
    return res
})

export const postSlice = createSlice({
    name: "post",
    initialState: {
        posts: [],
        status: "idle"
    },
    reducers: {
    },
    extraReducers: {
        [increaseLike.fulfilled]: (state, action) => {
            state.status = "fulfilled"
        },
        [increaseLike.pending]: (state) => {
            state.status = "pending"
        },
        [increaseLike.rejected]: (state) => {
            state.status = "rejected"
        },
        [decreaseLike.fulfilled]: (state, action) => {
            state.status = "fulfilled"
        },
        [decreaseLike.pending]: (state) => {
            state.status = "pending"
        },
        [decreaseLike.rejected]: (state) => {
            state.status = "rejected"
        }
    }
})

export default postSlice.reducer