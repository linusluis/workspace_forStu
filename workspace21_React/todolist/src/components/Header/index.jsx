import React, { Component } from 'react'
import { nanoid } from 'nanoid';

import './index.css';
export default class Header extends Component {
    handleKeyUp = (event)=>{
        const {target,keyCode} = event;
        if(keyCode !== 13) return;
        if(target.value === ''){
            alert('输入的todo不能为空');
            return;
        }
        const newTodo = {id:nanoid(),name:target.value,done:false};
        this.props.addTodo(newTodo);
        
    }
    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyUp}/>
            </div>
        )
    }
}
