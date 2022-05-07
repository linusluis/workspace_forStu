import { ADD_PERSON } from "../contant";
const initState= [{id:'001',name:"张三",age:10}];
export default function personReducer(prevState = initState,action){
    const {type,data} = action;
    switch(type){
        case ADD_PERSON:
            return [data,...prevState];
        default:
            return prevState;
    }
}