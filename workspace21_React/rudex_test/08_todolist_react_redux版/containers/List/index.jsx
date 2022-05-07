import React, { Component } from 'react'
import Item from '../Item';
import './index.css';
import { connect } from 'react-redux';
class List extends Component {
    
    render() {
        return (
            <ul className="todo-main">
                {
                    this.props.todos.map((todo)=>{
                        return <Item key={todo.id} {...todo}/>
                    })
                }     
            </ul>
        )
    }
}
const mapStateProps = (state)=>({todos:state.header});
const mapDispatchProps = (dispatch)=>({
    
})
export default connect(mapStateProps,mapDispatchProps)(List);
