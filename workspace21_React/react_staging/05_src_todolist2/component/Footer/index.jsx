import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
    checkAllBox = (event) =>{
        this.props.checkAllTodo(event.target.checked);
    }
    handleDeleteAllDone = () =>{
        this.props.deleteAllDone();
    }
    render() {
        const {todos} = this.props;
        const doneCount = todos.reduce((prev,todo)=>{
            return prev+(todo.done?1:0);
        },0)
        const total = todos.length;
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked = {total === doneCount && total!= 0?true:false} onChange ={this.checkAllBox} />
                </label>
                <span>
                    <span>已完成{doneCount}</span> / {total}
                </span>
                <button onClick = {this.handleDeleteAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
