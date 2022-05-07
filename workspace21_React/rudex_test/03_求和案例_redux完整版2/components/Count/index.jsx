import React, { Component } from 'react';
import { createIncrementAction,createDecrementAction } from '../../redux/count_action';
import store from '../../redux/store';

export default class Count extends Component {
    increment = ()=>{
        const {value} = this.selectNumber;
        store.dispatch(createIncrementAction(value*1));
    }
    decrement = ()=>{
        const {value} = this.selectNumber;
        store.dispatch(createDecrementAction(value*1));
    }
    incrementIfOdd = ()=>{
        const count = store.getState();
        const {value} = this.selectNumber;
        if(count%2!==0){
            store.dispatch(createIncrementAction(value*1));
        }
    }
    incrementAsync = ()=>{
        setTimeout(()=>{
            const {value} = this.selectNumber;
        store.dispatch(createIncrementAction(value*1));
        },1000)
    }
  render() {
    return (
      <div>
          <h1>{store.getState()}</h1>
        <select name="" id="" ref = {e=>this.selectNumber = e}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button onClick = {this.increment}>+</button>
        <button onClick = {this.decrement}>-</button>
        <button onClick = {this.incrementIfOdd}>奇数+</button>
        <button onClick = {this.incrementAsync}>异步+</button>
      </div>
    )
  }
}
