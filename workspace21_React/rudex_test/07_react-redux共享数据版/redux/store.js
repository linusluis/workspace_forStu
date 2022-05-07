
import {createStore,combineReducers} from 'redux';
import countReducer from './reducers/count_reducer';
import personReducer from './reducers/person_reducer';

const allReducer = combineReducers({
    he:countReducer,
    rens:personReducer
})
export default createStore(allReducer);