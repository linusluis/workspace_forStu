import React, { Component } from 'react'
//引入store，用于获取redux中保存状态
import store from '../../redux/store'
import { createIncrementAction,createDecrementAction } from '../../redux/count_action'
export default class Count extends Component {
    

    increment = ()=>{
        const {value} = this.selectNumber
        //通知redex+value
        store.dispatch(createIncrementAction(value)); 

    }
    decrement = ()=>{
        const {value} = this.selectNumber
        //通知redex+value
        store.dispatch(createDecrementAction(value)); 

    }
    incrementIfOdd = ()=>{
        const count = store.getState();
        const {value} = this.selectNumber
        if(count%2!==0){
            store.dispatch(createIncrementAction(value)); 

        }

    }
    incrementAsync = ()=>{
        const {value} = this.selectNumber
        setTimeout(()=>{
            store.dispatch(createIncrementAction(value)); 

        },1000)
         
    }
    render() {
        return (
            <div>
                <h1>{store.getState()}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}
