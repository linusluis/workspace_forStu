import React, { Component } from 'react'


export default class Count extends Component {
    increment = ()=>{
        const {value} = this.selectNumber;
        this.props.jia(value);
    }
    decrement= ()=>{
        const {value} = this.selectNumber;
        this.props.jian(value);
    }
    incrementIfOdd=()=>{
        const {value} = this.selectNumber;
        if(this.props.count%2!==0){
            this.props.jia(value);
        }
    }
    incrementAsync=()=>{
        const {value} = this.selectNumber;
        this.props.jiaAsync(value);
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.count}</h1>
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
