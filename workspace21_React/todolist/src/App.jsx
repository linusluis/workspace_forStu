import React, { Component } from 'react'

// 引入Header\List\Footer组件和公共样式
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css';
export default class App extends Component {
  //初始化状态
  state = {
    todos:[
      {id:'001',name:'play basketball',done:false},
      {id:'002',name:'play chess',done:false},
      {id:'003',name:'do homework',done:true},
      {id:'004',name:'play volleyball',done:false},
      {id:'005',name:'play football',done:false},
    ]
  }
  //添加todo的方法
  addTodo = (newTodoObj)=>{
    const {todos} = this.state;
    this.setState({todos:[newTodoObj,...todos]});
  }
  //更新todo的方法
  updateTodo = (id,done)=>{
    const {todos} = this.state;
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.id === id){
        return {...todoObj,done};
      }
      return todoObj;
    })
    this.setState({todos:newTodos});
  }
  //删除todo的方法
  deleteTodo = (id)=>{
    const {todos} = this.state;
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id;
    })
    this.setState({todos:newTodos});
  }
  //更新所有todo的方法
  updateAllTodos = (done)=>{
    const {todos} = this.state;
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj,done};
    })
    this.setState({todos:newTodos});
  }
  //清除所有做过todo的方法
  clearAllDone = ()=>{
    const {todos} = this.state;
    const newTodos = todos.filter((todoObj)=>{
      return !todoObj.done;
    })
    this.setState({todos:newTodos})
  }
  render() {
    const {todos} = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo = {this.addTodo}/>
          <List todos = {todos} updateTodo = {this.updateTodo} deleteTodo = {this.deleteTodo}/>
          <Footer todos = {todos} updateAllTodos = {this.updateAllTodos} clearAllDone = {this.clearAllDone}/>
        </div>
      </div>
    )
  }
}

