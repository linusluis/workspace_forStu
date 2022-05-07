import React, { Component } from 'react';
import Header from './component/Header';
import List from './component/List';
import Footer from './component/Footer';

import './App.css';

export default class App extends Component {
    //初始化todo状态
    state = {
        todos:[
            {id:'001',name:'Vue',done:true},
            {id:'002',name:'React',done:false},
            {id:'003',name:'ES6',done:false},
            {id:'004',name:'TS',done:true}
        ]
    }
    addTodo = (todo)=>{
        const {todos} = this.state;
        const newTodos = [todo,...todos];
        this.setState({todos:newTodos});
    }

    updateTodo = (id,done)=>{
        const {todos} = this.state;
        const newTodos = todos.map((todo)=>{
            if(todo.id === id){
                return{...todo,done};
            }
            return todo;
        })       
        this.setState({todos:newTodos});

    }

    deleteTodo =(id)=>{
        const {todos} = this.state;
        const newTodos = todos.filter((todo)=>{
            return todo.id!== id;
        })
        this.setState({todos:newTodos});
    }
    checkAllTodo = (flag)=>{
        const {todos} = this.state;
        const newTodos = todos.map((todo)=>{
            return {...todo,done:flag};
        })
        this.setState({todos:newTodos});
    }

    deleteAllDone = ()=>{
        const {todos} = this.state;
        const newTodos = todos.filter((todo)=>{
            return !todo.done;
        })
        this.setState({todos:newTodos});

    }

    render() {
        const {todos} = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo= {this.updateTodo} deleteTodo = {this.deleteTodo}/>
                    <Footer todos = {todos} checkAllTodo = {this.checkAllTodo} deleteAllDone = {this.deleteAllDone}/>
                </div>
            </div>
        )
    }
}