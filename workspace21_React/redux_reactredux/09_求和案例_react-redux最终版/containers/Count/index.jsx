import { connect } from 'react-redux';
import { Component } from 'react';

import { increment,decrement,incrementAsync } from '../../redux/actions/count';


export class CountUI extends Component {
    increment = () => {
        const { value } = this.selectNumber;
        this.props.increment(value * 1);
        console.log(this.props);

    }
    decrement = () => {
        const { value } = this.selectNumber;
        this.props.decrement(value * 1);
    }
    incrementIfOdd = () => {
        const { count } = this.props;
        const { value } = this.selectNumber;
        if (count % 2 !== 0) {
            this.props.increment(value * 1);
        }

    }
    incrementAsync = () => {
        const {value} = this.selectNumber;
        this.props.incrementAsync(value*1,1000);
    }
    render() {
        const { count } = this.props
        return (
            <div>
                <h1>我是Count组件，下方组件的人数为：{this.props.persons.length}</h1>
                <h2>{count}</h2>
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

//使用connect()()创建并且暴露一个Count容器组件。
export default connect(state=>({count:state.count,persons:state.persons}),
{
    increment,
    decrement,
    incrementAsync
}
)(CountUI)