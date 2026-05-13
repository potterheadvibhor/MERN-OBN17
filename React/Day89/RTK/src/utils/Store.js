import {configureStore} from "@reduxjs/toolkit"
import counterSliceReducer from "./CounterSlicer"
import textSliceReducer from "./TextSlicer"


const store=configureStore({
    reducer :{
Counter : counterSliceReducer,
Text: textSliceReducer
    }
})

export default store