import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from "../../Utils/baseUrl";
import axios from 'axios';

export const userLogin = createAsyncThunk('userSlice/userLogin', async ({username, password}) => {
        const url = baseUrl();
        const response = await axios.post(`${url}/user/login`, { username: username, password: password });
        return response.data.result
})

const { isUserLoggedIn, token: savedToken } = JSON.parse(localStorage.getItem("login")) || { isUserLoggedIn: false, token: null };

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        username: "",
        password: "",
        isUserLoggedIn: isUserLoggedIn,
        token: savedToken,
        status: "idle",
    },
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setLogin: (state, action) => {
            state.isUserLoggedIn = true
            state.token = action.payload
        },
        setLogout: (state) => {
            state.isUserLoggedIn = false
            state.token = null
            state.status = "idle"
        }
    },
    extraReducers: {
        [userLogin.fulfilled]: (state, action) => {
            state.isUserLoggedIn = true
            state.token = action.payload
            state.status = "fulfilled"
        },
        [userLogin.pending]: (state) => {
            state.status = "pending"
        },
        [userLogin.rejected]: (state) => {
            state.status = "rejected"
        },
    }
})

export const { setLogin, setLogout, setUsername, setPassword } = authSlice.actions
export default authSlice.reducer