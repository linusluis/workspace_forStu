import React from 'react';
import ReactDOM from 'react-dom';

import store from './redux/store';
import App from './App';
ReactDOM.render(<App/>,document.getElementById('root'));

//store.subscribe()用于检测redux中状态的变化，只要变化，就调用render
store.subscribe(()=>{
    ReactDOM.render(<App/>,document.getElementById('root'));
})