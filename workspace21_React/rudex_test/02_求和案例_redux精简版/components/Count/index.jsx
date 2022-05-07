import React, { Component } from 'react'
//引入store，用于获取redux中保存状态
import store from '../../redux/store'
export default class Count extends Component {
    

    increment = ()=>{
        const {value} = this.selectNumber
        //通知redex+value
        store.dispatch({type:'increment',data:value*1}) 

    }
    decrement = ()=>{
        const {value} = this.selectNumber
        //通知redex+value
        store.dispatch({type:'decrement',data:value*1}) 
    }
    incrementIfOdd = ()=>{
        const count = store.getState();
        const {value} = this.selectNumber
        if(count%2!==0){
            store.dispatch({type:'increment',data:value*1})
        }

    }
    incrementAsync = ()=>{
        const {value} = this.selectNumber
        setTimeout(()=>{
            store.dispatch({type:'increment',data:value*1})
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
