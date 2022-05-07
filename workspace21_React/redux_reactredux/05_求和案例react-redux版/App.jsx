import {Component} from 'react';

import Count from './containers/Count'; 
import store from './redux/store';
class App extends Component{
    render(){
        return(
            /* 给容器组件传递store */
            <Count store = {store}/>
        )
    }
}

export default App;