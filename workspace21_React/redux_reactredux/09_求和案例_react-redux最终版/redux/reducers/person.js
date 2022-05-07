import { ADD_PERSON } from "../contant";
//初始化人的列表
const initState = [
    {name:'zhangsan',age:12},
    {name:'lisi',age:22}
]
const personReducer = (prevState = initState,action)=>{
    const {type,name,age} = action;
    switch(type){
        case ADD_PERSON://如果是添加一个人
        const newPerson = {name,age};
        prevState.unshift(newPerson);//此处不可以这样写，这样会导致preState被改写了，personReducer就不是纯函数了。
            return[...prevState,newPerson];
        default:
            return prevState;
    }
}
export default personReducer;