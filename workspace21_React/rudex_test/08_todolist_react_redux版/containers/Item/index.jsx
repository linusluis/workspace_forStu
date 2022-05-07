import React, { Component } from 'react'
import './index.css';
import {connect} from 'react-redux';
import {createDeleteTodoAction, createUpdateTodoAction} from '../../redux/actions/header';
class Item extends Component {
    state = {mouse:false};
    handleCheck = (id)=>{
        return (event)=>{
            console.log(id);
            this.props.updateTodo(id,event.target.checked);
        }
    }
    handleDelete= (id)=>{
        return ()=>{
            if(window.confirm('确认删除吗')){
                this.props.deleteTodo(id);
            }
        }
    }
    handleMouse = (flag) =>{
        return ()=>{
            this.setState({mouse:flag});
        }
    }
    render() {

        const {name,done,id} = this.props;
        const {mouse} = this.state;
        return (
            <li style= {{backgroundColor:mouse?'#ddd':'#fff'}} onMouseEnter={this.handleMouse(true)} onMouseLeave = {this.handleMouse(false)}>
                <label>
                    <input  type="checkbox" checked={done} onChange = {this.handleCheck(id)}/>
                    <span style = {{textDecoration:done?'line-through':'none'}}>{name}</span>
                </label>
                <button onClick = {this.handleDelete(id)}className="btn btn-danger">删除</button>
            </li>
        )
    }
}
const mapStateProps = (state)=>({todos:state.header});
const mapDispatchProps = (dispatch)=>({
    updateTodo:(id,done)=>dispatch(createUpdateTodoAction(id,done)),
    deleteTodo:(id)=>dispatch(createDeleteTodoAction(id)),
})
export default connect(mapStateProps,mapDispatchProps)(Item);
