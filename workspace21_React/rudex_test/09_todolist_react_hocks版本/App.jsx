import React,{useState} from 'react'
import { nanoid } from 'nanoid';
import './App.css';

export default function App() {
    const [todos,setTodos] = useState([
        {id:'001',name:'play',done:false},
        {id:'002',name:'listen',done:false},
        {id:'003',name:'code',done:false},
        {id:'004',name:'homework',done:false},
    ])
    return (
        <div className="todo-container">
            <div className="todo-wrap">
                <Header addTodo={addTodo} />
                <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
                <Footer todos={todos} checkAllTodo={checkAllTodo} clearAllDone={clearAllDone} />
            </div>
        </div>
    )
    function addTodo(todoObj){
        setTodos(()=>{return [todoObj,...todos]});
    }
    function updateTodo(id,done){
        setTodos(()=>{
            return todos.map((todo)=>{
                if(todo.id===id)return {...todo,done};
                return todo;
            })
        })
    }
    function deleteTodo(id){
        setTodos(()=>{
            return todos.filter((todo)=>{
                return todo.id!==id;
            })
        })
        
    }
    function checkAllTodo(flag){
        setTodos(()=>{
            return todos.map((todo)=>{
                return {...todo,done:flag};
            })
        })
    }
    function clearAllDone(){
        setTodos(()=>{
            return todos.filter((todo)=>{
                return !todo.done;
            })
        })
    }
}
function Header(props){
    const {addTodo} = props;
    function handleKeyUp(event){
        const {target,keyCode} = event;
        if(keyCode!==13)return;
        if(target.value.trim()===''){
            alert('输入不能为空');
            return;
        }
        const todoObj = {id:nanoid(),name:target.value,done:false};
        addTodo(todoObj);

    }
    return (
        <div className="todo-header">
            <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={handleKeyUp}/>
        </div>
    )
}
function List(props){
    const {todos,updateTodo,deleteTodo} = props;
    return (
        <ul className="todo-main">
            {
                todos.map((todo)=>{
                    //函数体
                    return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                })
            }
            
        </ul>
    )
}
function Footer(props){
    const {todos,checkAllTodo,clearAllDone} = props;
    const allCount = todos.length;
    const doneCount = todos.reduce((prev,todo)=>{
        return prev+(todo.done?1:0);
    },0);
    function handleCheckAll(){
        return (event)=>{
            checkAllTodo(event.target.checked)
        }
    }
    function handleClearAll(){
        clearAllDone();
    }
    return (
        <div className="todo-footer">
        <label>
          <input type="checkbox" checked={allCount===doneCount && allCount !== 0?true:false} onChange={handleCheckAll()}/>
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{allCount}
        </span>
        <button className="btn btn-danger" onClick = {handleClearAll}>清除已完成任务</button>
      </div>
    )
}
function Item(props){
    const [mouse,setMouse] = useState(false);
    const {name,done,id,updateTodo,deleteTodo} = props;
    function handleCheck(id){
        return (event)=>{
            updateTodo(id,event.target.checked);
        }
    }
    function handleMouse(flag){
        return ()=>{
            setMouse(flag);
        }
    }
    function handleDelete(id){
        return ()=>{
            if(window.confirm('确认删除吗？')){
                deleteTodo(id);
            }
        }
    } 
    return (
        <li style={{backgroundColor: mouse?'#ddd':'#fff'}} onMouseEnter={handleMouse(true)} onMouseLeave={handleMouse(false)}>
          <label>
            <input type="checkbox" checked={done} onChange={handleCheck(id)}/>
            <span style={{textDecoration:done?'line-through':'none',textDecorationColor:done?'orange':'none'}}>{name}</span>
          </label>
          <button className="btn btn-danger" onClick = {handleDelete(id)}>删除</button>
        </li>
      )
}
