import React, { Component } from 'react'

const Detaildata = [
    {id:'01',content:'我爱你中国'},
    {id:'02',content:'我爱你CHANGCHUN'},
    {id:'03',content:'我爱你CG'}
];
export default class Detail extends Component {

    
  render() {
    //接收params参数
    const {id,title} = this.props.match.params;
    const findResult = Detaildata.find((detailObj)=>{
        return detailObj.id === id;
    })
    
    return (
      <ul>
          <li>ID:{id}</li>
          <li>Title:{title}</li>
          <li>ConTent:{findResult.content}</li>
      </ul>
    )
  }
}
