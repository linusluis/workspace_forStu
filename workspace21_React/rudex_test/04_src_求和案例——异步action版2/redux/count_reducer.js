//该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
// reducer函数会接收到两个参数，分别为：之前的状态（previousState,action）

import {INCREMENT,DECREMENT} from './constant';
const initState = 0;//初始化状态
export default function countReducer(preState = initState,action){
    //从action 对象中获取type\data
    const {data,type} = action;
    //根据type决定如何加工数据
    switch(type){
        case INCREMENT://如果是加
            return preState + data;
        case DECREMENT://如果是减
            return preState - data;
        default :
            return preState;
    }
}
