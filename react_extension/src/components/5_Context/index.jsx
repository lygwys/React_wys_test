import React, { Component } from 'react'
import './index.css'

const MyContext = React.createContext()
const {Provider,Consumer} = MyContext

export default class A extends Component {
    state = {userName:'tom',age:18}
    render() {
        const {userName,age} = this.state
        return (
            <div className="parent">
                <h3>我A组件</h3>
                <h4>我的用户名是{this.state.userName}</h4>
                <Provider value={{userName,age}}>
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

// class C extends Component {
//     static contextType = MyContext
//     render() {
//         const {userName,age} = this.context
//         return (
//             <div className="grand">
//                 <h3>我是C组件</h3>
//                 <h4>我从A组件接收到的用户名是{userName},年龄是{age}</h4>
//             </div>
//         )
//     }
// }

function C(){
    return (
        <div className="grand">
            <h3>我是C组件</h3>
            <h4>我从A组件接收到的用户名是
                <Consumer>
                    {value => `${value.userName}年龄是${value.age}`}      
                </Consumer>               
            </h4>
        </div>
    )
}
