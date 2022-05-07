import React, { Component } from 'react'
import './index.css'
import {connect} from 'react-redux';
import {createCheckedAllAction,createClearAllDoneAction} from '../../redux/actions/header';
class Footer extends Component {
    handleCheckAll = (event)=>{
        this.props.checkedAll(event.target.checked);
    }
    handleClearAll = ()=>{
        this.props.clearAllDone();
    }
  render() {
    const allTodos = this.props.todos.length;
    const doneTodos = this.props.todos.reduce((prev,todoObj)=>{
        return prev+(todoObj.done?1:0);
    },0)
    return (
        <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckAll} checked={doneTodos === allTodos && allTodos !== 0 ? true : false}/>
        </label>
        <span>
          <span>已完成{doneTodos}</span> / 全部{allTodos};
        </span>
        <button className="btn btn-danger" onClick = {this.handleClearAll}>清除已完成任务</button>
      </div>
    )
  }
}
const mapStateProps = (state)=>({todos:state.header})
const mapDispatchProps = (dispatch)=>({
    checkedAll:isChecked=>dispatch(createCheckedAllAction(isChecked)),
    clearAllDone:()=>(dispatch(createClearAllDoneAction()))
})
export default connect(mapStateProps,mapDispatchProps)(Footer);

