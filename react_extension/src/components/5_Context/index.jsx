import React, { Component } from 'react'
import './index.css'

const MyContext = React.createContext()
const {Provider} = MyContext

export default class A extends Component {
    state = {userName:'tom'}
    render() {
        const {userName} = this.state
        return (
            <div className="parent">
                <h3>我A组件</h3>
                <h4>我的用户名是{this.state.userName}</h4>
                <Provider value={userName}>
                    <B/>
                </Provider>
            </div>
        )
    }
}


 class B extends Component {
    render() {
        return (
            <div className="child">
                <h3>我是B组件</h3>                
                <C/>
            </div>
        )
    }
}

class C extends Component {
    static contextType = MyContext
    render() {
        console.log(this);
        return (
            <div className="grand">
                <h3>我是C组件</h3>
                <h4>我从A组件接收到的用户名是{this.context}</h4>
            </div>
        )
    }
}