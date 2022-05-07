import { ADD_TODO, DELETE_TODO, UPDATE_TODO,CHECKED_ALL, CLEAR_ALLDONE } from "../contant";
const initState = [{id:'001',name:'敲代码',done:false},
                    {id:'002',name:'看电视',done:true},
                    {id:'003',name:'打扑克',done:false}];
export default function headerReducer(preState = initState,action){
    const {type,data} = action;
    switch(type){
        case ADD_TODO:
            return [data,...preState];
        case UPDATE_TODO:
            return preState.map((todoObj)=>{
                if(todoObj.id === action.id){
                    return {...todoObj,done:action.done};
                }
                else return todoObj;
            })
        case DELETE_TODO:
            return preState.filter((todoObj)=>{
                return todoObj.id !== action.id;
            })
        case CHECKED_ALL:
            return preState.map((todoObj)=>{
                    return {...todoObj,done:action.isChecked}
            })
        case CLEAR_ALLDONE:
            return preState.filter((todoObj)=>{
                return !todoObj.done;
            })
        default:
            return preState;
    }
}