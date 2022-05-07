import React, { Component } from 'react'

export default class Count extends Component {
  increment = () => {
    const { value } = this.selectNumber;
    this.props.jia(value * 1);
  }
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.jian(value * 1);
  }
  incrementIfOdd = () => {
    const count = this.props.count;
    const { value } = this.selectNumber;

    if (count % 2 !== 0) {
      this.props.jia(value * 1);
    }
  }
  incrementAsync = () => {
    setTimeout(()=>{
      const {value} = this.selectNumber;
      this.props.jia(value * 1);
    },1000)
  }
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <select ref={c => this.selectNumber = c}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>奇数+</button>
        <button onClick={this.incrementAsync}>异步+</button>
      </div>
    )
  }
}
