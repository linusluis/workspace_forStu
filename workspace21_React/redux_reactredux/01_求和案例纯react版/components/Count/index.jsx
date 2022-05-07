import {Component} from 'react';
export default class Count extends Component{
    state = {count:0}
    increment = ()=>{
        const {count} = this.state;
        const value = this.selectNumber.value*1;
        this.setState({count:count+value});          
    }
    decrement = ()=>{
        const {count} = this.state;
        const value = this.selectNumber.value*1;
        this.setState({count:count-value}); 
    }
    incrementIfOdd = ()=>{
        const {count} = this.state;
        const value = this.selectNumber.value*1;
        if(count%2 !== 0){
            this.setState({count:count+value}); 
        }

    }
    incrementAsync = ()=>{
        const {count} = this.state;
        const value = this.selectNumber.value*1;
        setTimeout(()=>{
            this.setState({count:count+value});
        },1000)
    }
    render(){
        const {count} = this.state;
        return (
            <div>
                <h1>{count}</h1>
                <select ref = {(c)=>{this.selectNumber = c}}>
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