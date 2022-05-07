import React, { Component } from 'react'
import { Route,Link,NavLink } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
export default class App extends Component {
  render() {
    return (
        <div>
        <div class="row">
          <div class="col-xs-offset-2 col-xs-8">
            <div class="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-2 col-xs-offset-2">
            <div class="list-group">
              {/* <a class="list-group-item active" href="./about.html">About</a>
              <a class="list-group-item" href="./home.html">Home</a> */}
                {/* 编写路由链接 */}
                {/* 使用NavLink，activeClassDemo指定要用的高亮样式，定义在src/App.js */}
                <NavLink activeClassName='demo' className ='list-group-item' to='/about'>About</NavLink>
                <NavLink activeClassName='demo' className ='list-group-item a' to='/home'>Home</NavLink>
            </div>
          </div>
          <div class="col-xs-6">
            <div class="panel">
              <div class="panel-body">
                {/* 注册路由 */}
                <Route path='/home' component={Home}></Route>
                <Route path='/about' component={About}></Route>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
