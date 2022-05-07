import {Component} from 'react';
import {connect} from 'react-redux';
import { createAddPersonAction } from '../../redux/actions/person';
class PersonUI extends Component{
    add = ()=>{
        const age = this.ageNode.value;
        const name = this.nameNode.value;
        this.props.addPerson(name,age);
    }
    render(){
        const {persons} = this.props;
        return(
            <div>
                <h1>我是Person组件,上方组件求和为：{this.props.count}</h1>
                姓名：<input ref={c=>{this.nameNode = c}} type="text" placeholder='输入名字'/>
                年龄：<input ref={c=>{this.ageNode = c}} type="text" placeholder='输入年龄'/>
                <button onClick = {this.add}>填加</button>
                <ul>
                    {
                        persons.map((person,index)=>{
                            return <li key ={index} >{person.name}---{person.age}</li>

                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(state=>({persons:state.rens,count:state.he}),
{
    addPerson:createAddPersonAction
}
)(PersonUI)