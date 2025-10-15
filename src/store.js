import { configureStore } from "@reduxjs/toolkit";
import dataReducers from './dataslice'
export const store=configureStore({
    reducer:{
        data:dataReducers
    }
})