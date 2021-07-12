import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import { baseUrl } from "../../Utils/baseUrl";

export const postUpload = createAsyncThunk('createPostSlice/postUpload', async ({ token, post }) => {
    const url = baseUrl();
    const postData = { post: post };
    const axiosConfig = { headers: { Authorization: token } };
    const res = await axios.post(`${url}/post`, postData, axiosConfig);
    return res
})

export const createPostSlice = createSlice({
    name: "createPost",
    initialState: {
        image: "",
        caption: "",
        postUploadStatus: "idle"
    },
    reducers: {
        addCaption: (state, action) => {
            state.caption = action.payload;
        },
        addImage: (state, action) => {
            state.image = action.payload;
        }
    },
    extraReducers: {
        [postUpload.fulfilled]: (state) => {
            console.log("post uploaded")
            state.status = "fulfilled"
        },
        [postUpload.pending]: (state) => {
            state.status = "pending"
        },
        [postUpload.rejected]: (state) => {
            state.status = "rejected"
        },
    }
})

export const { addCaption, addImage, resetInitialState } = createPostSlice.actions
export default createPostSlice.reducer