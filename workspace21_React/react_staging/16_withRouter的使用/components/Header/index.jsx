import React, { Component } from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
class Header extends Component {
    back =()=>{
        this.props.history.goBack();
    }
    render() {
        console.log("Header接收到的props是：", this.props);
        return (
            <div>
                <h2>React Router Demo</h2>
                <button onClick = {this.forward}>前进</button>
                <button onClick = {this.back}>后退</button>
                <button onClick = {this.go}>Go</button>
            </div>

        )
    }
}
export default withRouter(Header)
