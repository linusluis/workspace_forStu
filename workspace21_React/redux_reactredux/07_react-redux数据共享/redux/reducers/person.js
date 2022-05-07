import { ADD_PERSON } from "../contant";

const initState = [
    {name:'zhangsan',age:12},
    {name:'lisi',age:22}
]
const personReducer = (prevState = initState,action)=>{
    const {type,name,age} = action;
    switch(type){
        case ADD_PERSON:
            const newPerson = {name,age};
            return[...prevState,newPerson];
        default:
            return prevState;
    }
}
export default personReducer;