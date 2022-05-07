import { ADD_TODO,
    UPDATE_TODO,DELETE_TODO ,
    CHECKED_ALL,CLEAR_ALLDONE
} from "../contant"
export const createHeaderAction = (todoObj)=>({type:ADD_TODO,data:todoObj});
export const createUpdateTodoAction = (id,done)=>({type:UPDATE_TODO,id,done});  
export const createDeleteTodoAction = (id)=>({type:DELETE_TODO,id});
export const createCheckedAllAction = (isChecked)=>({type:CHECKED_ALL,isChecked})
export const createClearAllDoneAction = ()=>({type:CLEAR_ALLDONE})