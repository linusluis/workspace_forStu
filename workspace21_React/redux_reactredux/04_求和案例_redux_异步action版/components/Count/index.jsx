import React, { Component } from 'react'

import { createIncrementAction,createDecrementAction,createIncrementAsyncAction } from '../../redux/count_action';
import store from '../../redux/store';
export default class Count extends Component {
    myRef = React.createRef();
    increment = ()=>{
        const {value} = this.myRef.current;
        store.dispatch(createIncrementAction(value-0));
    }
    decrement = ()=>{
        const {value} = this.myRef.current;
        store.dispatch(createDecrementAction(value-0));
    }
    incrementIfOdd = ()=>{
        const count = store.getState();
        if(count % 2 !== 0){
            const {value} = this.myRef.current;
            store.dispatch(createIncrementAction(value-0));
        }
    }
    incrementAsync = ()=>{
        const {value} = this.myRef.current;
                    //使用异步action
        store.dispatch(createIncrementAsyncAction(value-0,1000));
    }
  render() {
      const count = store.getState();
    return (
      <div>
        <h1>{count}</h1>
        <select name="" id="" ref = {this.myRef}>
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
        </select>
            <button onClick = {this.increment}>+</button>
            <button onClick = {this.decrement}>-</button>
            <button onClick = {this.incrementIfOdd}>奇数+</button>
            <button onClick = {this.incrementAsync}>异步+</button>
      </div>
    )
  }
}
