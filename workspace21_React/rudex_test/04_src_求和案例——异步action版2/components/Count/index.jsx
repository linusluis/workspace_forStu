import React, { Component } from 'react'
//引入store，用于获取redux中保存的状态
import store from '../../redux/store';
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action';
export default class Count extends Component {
    increment = () =>{
        const value = this.selectNumber.value*1;
        store.dispatch(createIncrementAction(value));
    }
    decrement = ()=>{
      const value = this.selectNumber.value*1;
      store.dispatch(createDecrementAction(value));

    }
    incrementIfAdd = ()=>{
      const count = store.getState();
        const value = this.selectNumber.value*1;
        if(count%2!==0){
          store.dispatch(createIncrementAction(value));

        }  
    }
    incrementAsync = ()=>{
        // setTimeout(()=>{
          const value = this.selectNumber.value*1;
          store.dispatch(createIncrementAsyncAction(value,500));

        // },500)
    }
  render() {
    return (    
      <div>
        <h1>{store.getState()}</h1>
        <select ref = {(e)=>{this.selectNumber = e}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button onClick = {this.increment}>+</button>
        <button onClick = {this.decrement}>-</button>
        <button onClick = {this.incrementIfAdd}>奇数加</button>
        <button onClick = {this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
