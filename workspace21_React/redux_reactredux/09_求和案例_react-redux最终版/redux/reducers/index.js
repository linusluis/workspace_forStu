//该文件用于汇总所有的reducer为一个reducer
import { combineReducers } from "redux";
import count from './count';//引入为Count组件服务的reducer
import persons from './person'//引入为Person组件服务的reducer
//汇总所有的reducer变为一个总的reducer
export default combineReducers({
    count,
    persons
})