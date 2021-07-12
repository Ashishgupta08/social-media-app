import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from "../../Utils/baseUrl";
import axios from 'axios';

export const getProfileData = createAsyncThunk('profileSlice/getProfileData', async (token) => {
    const url = baseUrl();
    const response = await axios.get(`${url}/user/getUserData`, { headers: { Authorization: token } });
    return response.data.result
})

export const profileSlice = createSlice({
    name: "profile",
    initialState: {
        user: {
            _id: "",
            coverImg: "",
            email: "",
            followers: [],
            following: [],
            likedPosts: [],
            savedPosts: [],
            name: "",
            username: "",
            profileImg: "",
        },
        status: "idle"
    },
    reducers: {
        setProfileData: (state, action) => {
            state.user = action.payload
        },
        resetProfileState: (state) => {
            state.user = {}
        },
    },
    extraReducers: {
        [getProfileData.fulfilled]: (state, action) => {
            state.user = { ...action.payload }
            state.status = "fulfilled"
        },
        [getProfileData.pending]: (state) => {
            state.status = "pending"
        },
        [getProfileData.rejected]: (state) => {
            state.status = "rejected"
        }
    }
})

export const { setProfileData, resetProfileState } = profileSlice.actions
export default profileSlice.reducer