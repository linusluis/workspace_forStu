import React, { Component } from 'react'

import Item from '../Item';
import './index.css';
export default class List extends Component {
    render() {
        const {todos,updateTodo,deleteTodo} = this.props;
        return (
            <ul className="todo-main">
                {
                    todos.map((todoObj)=>{
                        return <Item key = {todoObj.id} {...todoObj} updateTodo = {updateTodo} deleteTodo = {deleteTodo}/>
                    })
                }
            </ul>
        )
    }
}
