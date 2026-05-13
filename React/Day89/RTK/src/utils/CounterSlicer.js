import {createSlice} from "@reduxjs/toolkit"

const counterSlicer=createSlice({
    name:"Counter",
    initialState: 0,
    reducers:{
        increment: (state,action)=>{
            return state+1

        },
        decrement: (state,action)=>{
            return state-1

        },
        reset: ()=>{
            return 0

        },

    }
})

export default counterSlicer.reducer
export const {increment,decrement,reset} =counterSlicer.actions