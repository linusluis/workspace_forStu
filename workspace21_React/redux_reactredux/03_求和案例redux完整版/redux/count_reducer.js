import { INCREMENT,DECREMENT } from "./contant";
const initState = 0;
export default function countReducer(prevState = initState,action){
    const {type,data} = action;
    switch(type){
        case INCREMENT:
            return data + prevState;
        case DECREMENT:
            return prevState - data;
        default:
            return prevState;
    }
}