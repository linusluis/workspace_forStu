import React, { Component } from 'react'
import './index.css';
import { nanoid } from 'nanoid';
import {createHeaderAction} from '../../redux/actions/header';
import { connect } from 'react-redux';
class Header extends Component {
    handleKeyUp = (event)=>{
        const {target,keyCode} = event;
        if(keyCode !== 13)return;
        if(target.value.trim()===""){
            alert('输入不能为空');
            return;
        }
        const newTodo = {id:nanoid(),name:target.value,done:false};
        // console.log(newTodo);
        this.props.addtodo(newTodo);
        target.value='';
        
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
const mapStateProps= (state)=>({todos:state.header});
const mapDispatchProps = (dispatch)=>({
    addtodo:todoObj=>dispatch(createHeaderAction(todoObj))
})
export default connect(mapStateProps,mapDispatchProps)(Header)
