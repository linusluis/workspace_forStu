//引入Count的UI组件
import CountUI from '../../components/Count';
//引入action
import { createIncrementAction,createDecrementAction ,createIncrementAsyncAction} from '../../redux/count_action';

//引入connect用于连接UI组件与redux
import { connect } from 'react-redux';
//mapStateProps函数返回的是一个对象
//返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
//mapStateProps用于传递状态

function mapStateProps(state) {//redux在帮你调a函数的时候，已经帮你把state传过去了
    return { count: state };
}
//mapDispatchProps函数返回的是一个对象
//返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
//mapStateProps用于传递操作状态的方法
function mapDispatchProps(dispatch) {
    // 通知redux执行加法和减法操作
    return {
        jia: number => dispatch(createIncrementAction(number)),
        jian: number => dispatch(createDecrementAction(number)),
        jiaAsync: (number,time) => dispatch(createIncrementAsyncAction(number,time))
    }
}

// 使用connect()()创建并暴露一个Count容器组件
export default connect(mapStateProps, mapDispatchProps)(CountUI);
