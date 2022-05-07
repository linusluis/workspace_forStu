
import React,{Component} from 'react';

import store from '../../redux/store';
import { createIncrementAction,createDecrementAction } from '../../redux/count_action';
export default class Count extends Component{
    myRef = React.createRef();
    increment = ()=>{
        const {value} = this.myRef.current;
        store.dispatch(createIncrementAction(value*1));
    }
    decrement = ()=>{
        const {value} = this.myRef.current;
        store.dispatch(createDecrementAction(value*1));
    }
    incrementIfOdd = ()=>{
        const count = store.getState();
        if(count % 2 !== 0){
            const {value} = this.myRef.current;
            store.dispatch(createIncrementAction(value*1));
        }
    }
    incrementAsync = ()=>{
        setTimeout(()=>{
            const {value} = this.myRef.current;
        store.dispatch(createIncrementAction(value*1));
        },1000)
    }
    render(){
        const count = store.getState();
        return (
            <div>
                <h1>{count}</h1>
                <select ref = {this.myRef}>
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