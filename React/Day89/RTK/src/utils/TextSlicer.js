import {createSlice} from "@reduxjs/toolkit"

const textSlicer= createSlice({
    name:"Text",
    initialState:"",
    reducers:{
        setText:(state,action)=>{
            return action.payload
        }

    }
})

export const {setText}=textSlicer.actions
export default textSlicer.reducer