import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './index.css';
export default class Item extends Component {

  state = {mouse:false};//标识鼠标移入移出
  //鼠标移入移出的回调
  handleMouse=(flag)=>{
    return ()=>{
      this.setState({mouse:flag});
    }
  }
  //勾选、取消勾选某一个todo的回调
  handleCheck=(id)=>{
    return (event)=>{
      this.props.updateTodo(id,event.target.checked);
    }
  }
//删除一个todo的回调
  handleDelete=(id)=>{
    if(window.confirm('确定删除吗？')){
      this.props.deleteTodo(id);
    } 
  }
  render() {
    const {mouse} = this.state;
    const {id,name,done} = this.props;
    return (
      <li style = {{backgroundColor:mouse?'#ddd':'#fff'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange = {this.handleCheck(id)}/>
          <span style= {{textDecoration:done?'line-through':'none'}}>{name}</span>
        </label>
        <button onClick = {()=>{this.handleDelete(id)}} className="btn btn-danger" style={{ display: mouse?'block':'none' }}>删除</button>
      </li>
    )
  }
}
