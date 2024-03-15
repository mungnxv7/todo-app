import {createSlice} from "@reduxjs/toolkit"
type Todo = {
    job: string
}
const initialState:Todo[] =[]

// Tạo slide cho các action
const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        //Khai báo các action
        addTodo:(state,action)=>{
            state.push(action.payload);
        },
        deleteTodo:(state,action)=>{
           const arrnew = state.filter(item=>item.job !== action.payload)
           return arrnew
        },
    }
})


export const {addTodo,deleteTodo} = todoSlice.actions

// khai báo todoSlice là 1 reducer
export default todoSlice.reducer