import React, { Component } from 'react'
//引入action
import { createIncrementAction,createDecrementAction ,createIncrementAsyncAction} from '../../redux/count_action';
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux';
// 定义UI组件
class Count extends Component {
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
        this.props.jiaAsync(value,1000);
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





// 使用connect()()创建并暴露一个Count容器组件
export default connect(state=> ({ count: state }), 
/*dispatch=>(
    {
        // 通知redux执行加法和减法操作
        jia: number => dispatch(createIncrementAction(number)),
        jian: number => dispatch(createDecrementAction(number)),
        jiaAsync: (number,time) => dispatch(createIncrementAsyncAction(number,time))
    }
)*/
// mapDispatchToProps的简写
{
    jia:createIncrementAction,
    jian:createDecrementAction,
    jiaAsync:createIncrementAsyncAction
} 
)(Count);
