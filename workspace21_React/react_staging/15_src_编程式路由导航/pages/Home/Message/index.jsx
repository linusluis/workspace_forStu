import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import Detail from './Detail';
export default class Message extends Component {

    state = {
        messageArr: [
            { id: '01', title: '消息1' },
            { id: '02', title: '消息2' },
            { id: '03', title: '消息3' }
        ]
    }

    replaceShow = (id,title)=>{
        // 编写一段代码，让其实现跳转到Detail组件，且为replace跳转
        //replace跳转+携带params参数
        // this.props.history.replace(`/home/message/detail/${id}/${title}`);
        //replace跳转+携带search参数
        // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`);
        this.props.history.replace('/home/message/detail',{id:id,title:title});
    }
    pushShow = (id,title) =>{
        // 编写一段代码，让其实现跳转到Detail组件，且为push跳转
        // push跳转+携带params参数
        // this.props.history.push(`/home/message/detail/${id}/${title}`);
        // push跳转+携带params参数
        // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`);
        // push跳转+携带state参数
        this.props.history.push('/home/message/detail',{id:id,title:title});

    }
    forWard = ()=>{
        this.props.history.goForward();
    }
    back = ()=>{
        this.props.history.goBack();
    }
    go=()=>{
        this.props.history.go(-2);
    }

    render() {
        const { messageArr } = this.state;
        return (
            <div>
                <ul>
                    {
                        messageArr.map(msgObj => {
                            return (
                                <li key={msgObj.id}>
                                    {/* 向路由组件传递params参数 */}
                                    <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`} >{msgObj.title}</Link>&nbsp;&nbsp;
                                    &nbsp;<button onClick= {()=>this.pushShow(msgObj.id,msgObj.title)}>push查看</button>
                                    &nbsp;<button onClick= {()=>this.replaceShow(msgObj.id,msgObj.title)}>replace查看</button>
                                    {/* 向路由组件传递search参数 */}
                                    {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`} >{msgObj.title}</Link>&nbsp;&nbsp; */}
                                    {/* 向路由组件传递state参数 */}
                                    {/* <Link replace ={true} to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>&nbsp;&nbsp; */}

                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* 声名接收params参数 */}
                {/* <Route path = '/home/message/detail/:id/:title' component = {Detail}></Route> */}
                
                {/* search参数无需声名接收 ，正常注册路由即可*/}
                <Route path = '/home/message/detail' component = {Detail}></Route>
                {/* state参数无需声名接收 ，正常注册路由即可*/}
                {/* <Route path = '/home/message/detail' component = {Detail}></Route> */}

                <button onClick = {this.back}>回退</button>
                <button onClick = {this.forWard}>前进</button>
                <button onClick = {this.go}>Go</button>
            </div>
        )
    }
}
