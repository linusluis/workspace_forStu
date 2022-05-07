import { INCREMENT,DECREMENT } from "./contant";
const initState = 28;
export default function countReducer(preState = initState,action){
    const {type,data} = action;
    switch(type){
        case INCREMENT:
            return preState+data;
        case DECREMENT:
            return preState-data;
        default:
            return preState;
    }
}