import {Component} from 'react';
import qs from 'query-string';
const Detaildata = [
    {id:'001',content : '我爱你中国'},
    {id:'002',content : '我爱你长春'},
    {id:'003',content : '我爱你长沙'},
]
export default class Detail extends Component{
    render(){
        console.log(this.props);
        // 接收search参数
        const search = this.props.location.search;
        const{id,title} = qs.parse(search.slice(1));
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