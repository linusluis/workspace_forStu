import React,{Component} from 'react';
//引入store，用于获取redux中保存状态
import store from '../../redux/store';
export default class Count extends Component{
    myRef = React.createRef();
    increment = ()=>{
        const {value} = this.myRef.current;
        //通知redux+value
        store.dispatch({type:'increment',data:value*1});
    }
    decrement = ()=>{
        const {value} = this.myRef.current;
        // 通知redux-value
        store.dispatch({type:'decrement',data:value*1});
    }
    incrementIfOdd = ()=>{
        const count = store.getState();
        if(count%2!==0){
            const {value} = this.myRef.current;
            store.dispatch({type:'increment',data:value*1});
        }
    }
    incrementAsync = ()=>{
        setTimeout(()=>{
            const {value} = this.myRef.current;
            store.dispatch({type:'increment',data:value*1});
        },1000)
    }
    render(){
        const count = store.getState();
        return(
            <div>
                <h1>{count}</h1>
                <select ref = {this.myRef}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <button onClick = {this.increment}>+</button>
                <button onClick = {this.decrement}>-</button>
                <button onClick = {this.incrementIfOdd}>奇数+</button>
                <button onClick = {this.incrementAsync}>异步+</button>
            </div>
        )
    }
}