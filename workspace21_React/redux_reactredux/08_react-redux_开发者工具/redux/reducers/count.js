import { INCREMENT,DECREMENT } from "../contant";
const initState = 0;
const countReducer = (prevState = initState,action)=>{
    const {type,data} = action;

    switch (type){
        case INCREMENT:
            return prevState+data;
        case DECREMENT:
            return prevState -data;
        default:
            return prevState;
    }
}
export default countReducer;