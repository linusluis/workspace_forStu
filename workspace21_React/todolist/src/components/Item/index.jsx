import React, { Component } from 'react'

import './index.css';
export default class Item extends Component {
    state = {mouse:false};
    handleMouse = (flag)=>{
        return ()=>{
            this.setState({mouse:flag});
        }
    }
    handleCheck = (id) =>{
        return (event)=>{
            this.props.updateTodo(id,event.target.checked);
        }
    }
    handleDelete = (id)=>{
        return ()=>{
            this.props.deleteTodo(id);
        }
    }
    render() {
        const {name,done,id} = this.props;
        const {mouse} = this.state;
        return (
            <li style= {{backgroundColor:mouse?'#ddd':'#fff'}}onMouseEnter={this.handleMouse(true)} onMouseLeave = {this.handleMouse(false)} >
                <label>
                    <input type="checkbox" checked = {done} onChange={this.handleCheck(id)} />
                    <span style = {{textDecoration:done?'line-through':'none'}}>{name}</span>
                </label>
                <button className="btn btn-danger" style={{display:mouse?'block':'none'}} onClick = {this.handleDelete(id)}>删除</button>
            </li>
        )
    }
}
