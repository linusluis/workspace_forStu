import { Component } from 'react';
import { NavLink,Route } from 'react-router-dom';

import Detail from './Detail';
export default class Message extends Component {
    state = {
        messageArr: [
            { id: '001', title: '消息1' },
            { id: '002', title: '消息2' },
            { id: '003', title: '消息3' },
        ]
    }
    render() {
        const { messageArr } = this.state;
        return (
            <div>
                <ul>
                    {
                        messageArr.map(msg => {
                            return<li key={msg.id}>
                                {/* 向路由组件传递search参数 */}
                                <NavLink to={`/home/message/detail/?id=${msg.id}&title=${msg.title}`}>{msg.title}</NavLink>&nbsp;&nbsp;
                            </li>
                        })
                    }
                </ul>
                {/* 声名接收search参数 */}
                <Route path = '/home/message/detail' component={Detail}></Route>
            </div>
        )
    }
}