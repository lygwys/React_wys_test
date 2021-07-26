import React, { Component } from 'react'

export default class Demo extends Component {
    state = {count:0}

    add = () =>{
        const {count} = this.state
        this.setState({count:count + 1},()=>{
            console.log('setState的回调函数输出是render后的值：',this.state.count)
        })
        console.log('setState后的输出，因为是异步的，还是原来的值：',this.state.count)
    }
    render() {
        return (
            <div>
                <h1>当前求和为{this.state.count}</h1>
                <button onClick = {this.add}>点我+1</button>
            </div>
        )
    }
}
