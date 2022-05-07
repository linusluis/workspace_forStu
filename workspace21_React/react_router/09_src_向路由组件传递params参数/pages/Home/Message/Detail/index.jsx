import {Component} from 'react';

const Detaildata = [
    {id:'001',content : '我爱你中国'},
    {id:'002',content : '我爱你长春'},
    {id:'003',content : '我爱你长沙'},
]
export default class Detail extends Component{
    render(){
        // 接收params参数
        const {id,title} = this.props.match.params;
        const findResult = Detaildata.find((detailObj)=>{
            return detailObj.id === id
        })
        return (
            <ul>
                <li>ID:{id}</li>
                <li>Title:{title}</li>
                <li>Content:{findResult.content}</li>
            </ul>
        )
    }
}