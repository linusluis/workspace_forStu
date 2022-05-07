import React from 'react';
import ReactDOM from 'react-dom';

import store from './redux/store'
import App from './App';
ReactDOM.render(<App/>,document.getElementById('root'));
//检测redux中状态的改变。如果redux的状态发生了改变，那么重新渲染App组件
store.subscribe(()=>{
    ReactDOM.render(<App/>,document.getElementById('root'));
})