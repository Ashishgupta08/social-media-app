import { createAsyncThunk,createSlice } from '@reduxjs/toolkit'



export const postThunk = createAsyncThunk('postslice/postThunk',async ()=>{
    return new Promise((resolve,_)=>setTimeout(()=>resolve("Here"),2000))
})

const PostSlice = createSlice({
    name:"postslice",
    initialState:{
        name:"",
        status:"idle"
    },
    reducer:{
        mutateState:(state)=>{
           state.name = "Ashish" // Immer
        }
    },
    extraReducers:{
        [postThunk.fulfilled] : (state)=> state.status = "fulfilled"
    }
})


export const {mutateState} = PostSlice.actions

export default PostSlice.reducer







