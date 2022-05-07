import {createStore,applyMiddleware} from 'redux';
import countReducer from '../redux/count_reducer';
import thunk from 'redux-thunk';
export default createStore(countReducer,applyMiddleware(thunk));