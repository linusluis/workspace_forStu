import {createStore,applyMiddleware} from 'redux';

import countReducer from './count_reducer';
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk';

//applyMiddleWare		接收thunk作为参数，而且必须自身作为createStore自身的
//第二个参数，不能是第一个参数也不能是第二个参数
export default createStore(countReducer,applyMiddleware(thunk));