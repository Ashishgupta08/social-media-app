import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../Firebase/config';

export const postUpload = createAsyncThunk('createPostSlice/postUpload', async (data) => {
    if(data.image === ""){
        
    }else if(data.caption === ""){

    }else{

    }
    console.log(data)
    console.log(auth.currentUser.uid)
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
        },
        resetInitialState: (state) => {
            state.image = ""
            state.caption = ""
            state.postUploadStatus = ""
        }
    },
    extraReducers: {
        [postUpload.fulfilled]: (state) => {
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