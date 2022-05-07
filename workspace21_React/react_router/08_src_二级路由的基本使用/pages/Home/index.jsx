import { Component } from 'react';
import { NavLink,Route,Redirect } from 'react-router-dom';

import News from './News';
import Message from './Message';
export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>我是Home组件中的内容</h1>
                
                <ul class="nav nav-tabs">
                    <li>
                    <NavLink className="list-group-item " to =  '/home/news' >News</NavLink> 
                    </li>
                    <li>
                    <NavLink className="list-group-item " to =  '/home/message' >Message</NavLink>
                    </li>
                </ul>
                <Route path = '/home/news' component={News}></Route>
                <Route path = '/home/message' component={Message}></Route>
                <Redirect to = '/home/news'></Redirect>
            </div>
        )
    }
}