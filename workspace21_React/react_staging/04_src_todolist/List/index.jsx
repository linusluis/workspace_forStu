import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Item from '../Item';
import './index.css';
export default class List extends Component {
    static propTytpes = {
        todos:PropTypes.array.isRequired,
        ipdateTodo:PropTypes.func.isRequired,

    }
    render() {
        const {todos,updateTodo,deleteTodo} = this.props;
        return (
            <ul className="todo-main">
                {
                    todos.map((todo)=>{
                        //函数体
                        return <Item key = {todo.id} {...todo} updateTodo = {updateTodo} deleteTodo = {deleteTodo}/>
                    })
                }
                
            </ul>
        )
    }
}
