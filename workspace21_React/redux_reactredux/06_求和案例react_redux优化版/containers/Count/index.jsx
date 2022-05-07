import { connect } from 'react-redux';
import { Component } from 'react';

import { createIncrementAction,createDecrementAction,createIncrementAsyncAction } from '../../redux/count_action';


export class CountUI extends Component {
    increment = () => {
        const { value } = this.selectNumber;
        this.props.jia(value * 1);

    }
    decrement = () => {
        const { value } = this.selectNumber;
        this.props.jian(value * 1);
    }
    incrementIfOdd = () => {
        const { count } = this.props;
        const { value } = this.selectNumber;
        if (count % 2 !== 0) {
            this.props.jia(value * 1);
        }

    }
    incrementAsync = () => {
        const {value} = this.selectNumber;
        this.props.jiaAsync(value*1,1000);
    }
    render() {
        const { count } = this.props
        return (
            <div>
                <h1>{count}</h1>
                <select name="" id="" ref={(c) => { this.selectNumber = c }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>奇数+</button>
                <button onClick={this.incrementAsync}>异步+</button>
            </div>
        )
    }
}


export default connect(state=>({count:state}),
{
    jia:createIncrementAction,
    jian:createDecrementAction,
    jiaAsync:createIncrementAsyncAction
}
)(CountUI)