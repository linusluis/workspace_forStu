import React, { Component } from 'react'
//引入store，用于获取redux中保存状态
import store from '../../redux/store';
//引入action creator
import { createIncrementAction,createDecrementAction,createIncrementAsyncAction } from '../../redux/count_action';
export default class Count extends Component {
    increment = ()=>{
        const {value} = this.selectNumber;
        store.dispatch(createIncrementAction(value));

    }
    decrement= ()=>{
        const {value} = this.selectNumber;
        store.dispatch(createDecrementAction(value));
    }
    incrementIfOdd=()=>{
        const count = store.getState();
        const {value} = this.selectNumber;
        if(count%2!==0){
            store.dispatch(createIncrementAction(value));

        }
    }
    incrementAsync=()=>{
        const {value} = this.selectNumber;
        // setTimeout(()=>{
            store.dispatch(createIncrementAsyncAction(value*1,500));
        // },1000)
    }
    render() {
        return (
            <div>
                <h1>{store.getState()}</h1>
                <select ref = {c=>this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>奇数加</button>
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}
