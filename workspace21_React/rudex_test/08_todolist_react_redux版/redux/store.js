import { createStore,combineReducers} from "redux";
import headerReducer from './reducers/todos';
const allReducers = combineReducers({
    header:headerReducer,
})
export default createStore(allReducers);