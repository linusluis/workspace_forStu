import {Component} from 'react';
import {Route,NavLink,Redirect} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About'
export default class App extends Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* <a className="list-group-item active" href="./about.html">About</a>
                            <a className="list-group-item" href="./home.html">Home</a> */}
                            {/* 编写路由链接 */}
                            <NavLink className = 'list-group-item' activeClassName = 'demo' to = '/home'>Home</NavLink>
                            <NavLink className = 'list-group-item' activeClassName = 'demo' to = '/about'>About</NavLink>
                            
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                <Route path = '/home' component={Home}></Route>
                                <Route path = '/about' component={About}></Route>
                                <Redirect to ='/home'></Redirect>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}