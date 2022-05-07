import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About'
import Test from './pages/Test';
import MyNavLink from './components/MyNavLink';
export default class App extends Component {
    render() {
        return (
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
                            <MyNavLink to='/home' children='Home' />
                            <MyNavLink to='/about' children='About' />
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                <Switch>
                                    <Route path='/home' component={Home}></Route>
                                    <Route path='/about' component={About}></Route>
                                    <Route path='/about' component={Test}></Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}