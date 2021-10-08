import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../Utils/baseUrl";

export const getHomeData = createAsyncThunk('homeSlice/getHomeData', async (token) => {
    const url = baseUrl();
    const response = await axios.get(`${url}/getFeed`, { headers: { Authorization: token } });
    return response.data.result
})

export const homeSlice = createSlice({
    name: "home",
    initialState: {
        feed: [],
        status: "idle"
    },
    reducers: {
    },
    extraReducers: {
        [getHomeData.fulfilled]: (state, action) => {
            state.feed = [...action.payload]
            state.status = "fulfilled"
        },
        [getHomeData.pending]: (state) => {
            state.status = "pending"
        },
        [getHomeData.rejected]: (state) => {
            state.status = "rejected"
        },
    }
})

export const { updateLike } = homeSlice.actions
export default homeSlice.reducer