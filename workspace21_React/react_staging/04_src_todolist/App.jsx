import React, { Component } from 'react';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import './App.css';
export default class App extends Component {
    //状态在哪里，操作状态的方法就在哪里

    //初始化状态
    state = {
        todos: [
            { id: '001', name: '吃饭', done: true },
            { id: '002', name: '睡觉', done: true },
            { id: '003', name: '打代码', done: false },
            { id: '004', name: '逛街', done: false },
        ]
    }
    //addTodo用于添加一个todo，接收的参数是一个todo对象
    addTodo = (todoObj) => {
        const { todos } = this.state;
        const newTodos = [todoObj, ...todos];
        this.setState({ todos: newTodos });
    }
    //update用于更新一个todo对象
    updateTodo = (id, done) => {
        //函数体
        const { todos } = this.state;;
        //遍历找到指定项,匹配数据
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) return { ...todoObj, done };
            else return todoObj;
        })
        this.setState({ todos: newTodos });
    }

    //deleteTodo用于删除一个todo对象
    deleteTodo = (id) => {
        //获取原来的todos
        const { todos } = this.state;
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id;
        })
        //更新状态
        this.setState({todos:newTodos});
    }
    //checkAllTodo用于全选
    checkAllTodo = (done)=>{
        const {todos} = this.state;
        const newTodos = todos.map((todoObj)=>{
            return {...todoObj,done}
        })
        this.setState({todos:newTodos});
    }
    //clearAllDone用于清除所有已完成
    clearAllDone=()=>{
        const {todos} = this.state;
        const newTodos = todos.filter((todoObj)=>{
            return !todoObj.done;
        })
        this.setState({todos:newTodos});
    }

    render() {
        const { todos } = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                    <Footer todos={todos} checkAllTodo = {this.checkAllTodo} clearAllDone = {this.clearAllDone}/>
                </div>
            </div>
        )
    }
}