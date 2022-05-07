import {Component} from 'react';

class Count extends Component{
    
    increment = ()=>{
        const {value} = this.selectNumber;
        this.props.jia(value-0);
    }
    decrement = ()=>{
        const {value} = this.selectNumber;
        this.props.jian(value-0);
    }
    incrementIfOdd = ()=>{
        const {count} =this.props;
        if(count % 2 !== 0){
            const {value} = this.selectNumber;
            this.props.jia(value-0);
        }
    }
    incrementAsync = ()=>{
        const {value} = this.selectNumber;
        this.props.asyncjia(value-0,1000);
    }
    render(){
        const {count} = this.props;
        return(
            <div>
                <h1>{count}</h1>
                <select name="" id="" ref = {c=>{this.selectNumber = c}}> 
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
export default Count