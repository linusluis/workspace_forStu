import React, { Component } from 'react'
import {connect} from 'react-redux';
import {createIncrementAction,createDecrementAction} from '../../redux/actions/count_action';
class Count extends Component {
  increment = ()=>{
      const {value} = this.selectNumber;
      this.props.jia(value*1);
  }
  decrement = ()=>{
    const {value} = this.selectNumber;
      this.props.jian(value*1);
  }
  incrementIfOdd = ()=>{
    const count = this.props.count;
    const {value} = this.selectNumber;
    if(count%2!==0){
        this.props.jia(value*1);
    }
  }
  incrementAsync = ()=>{
    setTimeout(()=>{
        const {value} = this.selectNumber;
        this.props.jia(value*1);
    },2000)
  }
  render() {
    return (
      <div>
          <h1>我是Count组件</h1>
          <h2>{this.props.count}</h2>
          <h3>下方组件的人数为：{this.props.persons.length}</h3>
        <select name="" id="" ref = {c=>this.selectNumber = c}>
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
const mapStateProps = (state)=>{
    return {count:state.he,persons:state.rens};
}
const mapDispatchProps = (dispatch)=>{
    return {
        jia:number=>dispatch(createIncrementAction(number)),
        jian:number=>dispatch(createDecrementAction(number)),
    }
}
export default connect(mapStateProps,mapDispatchProps)(Count) 
