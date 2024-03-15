import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../slices/todoSlice"
// đăng kí các reducer vào store
export const store =  configureStore({
    reducer:{
        todo: todoReducer
    }
})
// định nghĩa type
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
