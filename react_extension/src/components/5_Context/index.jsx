import React, { Component } from 'react'
import './index.css'

export default class A extends Component {
    state = {userName:'tom'}
    render() {
        return (
            <div class="parent">
                <h3>我A组件</h3>
                <h4>我的用户名是{this.state.userName}</h4>
                <B userName={this.state.userName}/>
            </div>
        )
    }
}


 class B extends Component {
    render() {
        return (
            <div class="child">
                <h3>我是B组件</h3>
                <h4>我从A组件接收到的用户名是{this.props.userName}</h4>
                <C userName={this.props.userName}/>
            </div>
        )
    }
}

class C extends Component {
    render() {
        return (
            <div class="grand">
                <h3>我是C组件</h3>
                <h4>我从A组件接收到的用户名是{this.props.userName}</h4>
            </div>
        )
    }
}
