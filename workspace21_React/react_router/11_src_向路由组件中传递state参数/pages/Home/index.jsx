import { Component } from 'react';
import {Route,NavLink,Redirect} from 'react-router-dom';

import News from './News';
import Message from './Message';
export default class Home extends Component {
    render() {
        
        return (
            <div>
                <h1>我是Home组件中的内容</h1>
                <ul className="nav nav-tabs">
                    <li>
                        <NavLink className = 'list-group-item active' to = '/home/news'>News</NavLink>
                    </li>
                    <li>
                        <NavLink className = 'list-group-item active' to = '/home/message'>Message</NavLink>
                    </li>
                </ul>
                <Route path = '/home/news' component={News}></Route>
                <Route path = '/home/message' component={Message}></Route>
                <Redirect to = '/home/news'></Redirect>
            </div>
            
        )
    }
}