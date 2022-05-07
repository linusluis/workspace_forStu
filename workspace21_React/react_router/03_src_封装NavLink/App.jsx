import React, { Component } from 'react'
import { Route} from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import MyNavLink from './components/MyNavLink';
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
                <MyNavLink to ='/home' children= 'Home'/>
                <MyNavLink to ='/about' children= 'About'/>
            </div>
          </div>
          <div class="col-xs-6">
            <div class="panel">
              <div class="panel-body">
                {/* 注册路由 */}
                <Route path='/home' component={Home}></Route>
                <Route path='/About' component={About}></Route>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
