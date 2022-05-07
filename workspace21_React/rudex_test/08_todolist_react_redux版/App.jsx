import React, { Component } from 'react'

import Header from './containers/Header'
import Footer from './containers/Footer'
import List from './containers/List';
import './App.css';
export default class App extends Component {
  render() {
    return (
      <div className="todo-container">
      <div className="todo-wrap">
          <Header/>
          <List/>
          <Footer/>
      </div>
  </div>
    )
  }
}
