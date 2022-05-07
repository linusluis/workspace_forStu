import React, { Component } from 'react'

import './index.css';
export default class Footer extends Component {
    handleCheckAll = (event)=>{
        this.props.updateAllTodos(event.target.checked);
    }
    handleClear = ()=>{
        this.props.clearAllDone();
    }
    render() {
        const {todos} = this.props;
        const allTodos = todos.length;
        const doneTodos = todos.reduce((prev,todoObj)=>{
            return prev+(todoObj.done?1:0);
        },0)
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked = {allTodos === doneTodos && allTodos !== 0?true:false} onChange = {this.handleCheckAll}/>
                </label>
                <span>
                    <span>已完成{doneTodos}</span> / 全部{allTodos}
                </span>
                <button className="btn btn-danger" onClick = {this.handleClear}>清除已完成任务</button>
            </div>
        )
    }
}
