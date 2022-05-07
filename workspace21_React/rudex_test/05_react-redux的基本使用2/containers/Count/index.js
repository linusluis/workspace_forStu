//引入Count的UI组件
import CountUI from '../../components/Count';
import { createIncrementAction,createDecrementAction } from '../../redux/count_action';
// 引入connect用于连接Ui组件与redux
import {connect} from 'react-redux';

const mapStateProps= (state)=>{
    return {count:state}
}
const mapDispatchProps= (dispatch)=>({
    jia:number=>dispatch(createIncrementAction(number)),
    jian:number=>dispatch(createDecrementAction(number))
})

export default connect(mapStateProps,mapDispatchProps)(CountUI)