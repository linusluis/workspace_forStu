import React, { Component } from 'react'

export default class Count extends Component {
    state = {count:0};
    increment = ()=>{
        const {count} = this.state
        const {value} = this.selectNumber
        this.setState({count:(count+value*1)}); 

    }
    decrement = ()=>{
        const {count} = this.state
        const {value} = this.selectNumber
        this.setState({count:(count-value*1)}); 
    }
    incrementIfOdd = ()=>{
        const {count} = this.state
        const {value} = this.selectNumber
        count%2!=0?this.setState({count:(count+value*1)}):this.setState({count:count});

    }
    incrementAsync = ()=>{
        const {count} = this.state
        const {value} = this.selectNumber;
        setTimeout(()=>{
            this.setState({count:(count+value*1)});
        },1000)
         
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
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
