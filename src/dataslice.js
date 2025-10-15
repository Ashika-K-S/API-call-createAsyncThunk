import {createSlice} from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const fetchData=createAsyncThunk("data/fetchData",async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    const data=await res.json()
    return data
})
const dataSlice=createSlice({
    name:"data",
    initialState:{items:[],status:"idle",error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
            state.status="loding..."
        }).addCase(fetchData.fulfilled,(state,action)=>{
            state.status="succeeded";
            state.items=action.payload;
        }).addCase(fetchData.rejected,(state,action)=>{
            state.status="rejected";
            state.error=action.error.message;
        });
    },
});
export default dataSlice.reducer;