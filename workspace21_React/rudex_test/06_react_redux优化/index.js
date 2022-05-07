import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import App from './App';
import {Provider} from 'react-redux';
//检测redux状态的改变，若redux的状态发生改变，那么重新渲染App组件
//App一渲染，App所有的子组件都渲染
// ReactDom.render(<App/>,document.getElementById('root'));
// store.subscribe(()=>{
//     ReactDom.render(<App/>,document.getElementById('root'));
// })
ReactDOM.render(
<Provider store= {store}>
<App/>
</Provider>,
document.getElementById('root'));

