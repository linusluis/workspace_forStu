import React, { Component } from 'react'
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import { createAddPersonAction } from '../../redux/actions/person_actions';
class Person extends Component {
    handleSubmit = () => {
        const name = this.nameNode.value;
        const age = this.ageNode.value;
        const person = {id:nanoid(),name:name,age:age};
        this.props.addPerson(person);
        this.nameNode.value = '';
        this.ageNode.value = '';
    }
    render() {
        console.log(this.props.persons);
        return (
            <div>
                <hr />
                <h1>我是Person组件</h1>
                <h2>上方组件求和为：{this.props.count}</h2>
                <input ref={c => this.nameNode = c} type="text" placeholder='请输入名字' />
                <input ref={c => this.ageNode = c} type="text" placeholder='请输入年龄' />
                <button onClick={this.handleSubmit}>提交</button>
                <ul>
                    {
                        this.props.persons.map((person) => {
                            return <li key= {person.id}>姓名：{person.name},年龄:{person.age}</li>
                        })
                    }

                </ul>
            </div>
        )
    }
}
const mapStateProps = state => ({persons: state.rens,count:state.he })

const mapDispatchProps = (dispatch) => ({
        addPerson: personObj => dispatch(createAddPersonAction(personObj))
})
export default connect(mapStateProps, mapDispatchProps)(Person)
