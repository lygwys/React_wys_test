import React, { Component } from 'react'

export default class Demo extends Component {
    state = {count:0}

    add = () => {
        this.setState(state=>({count:state.count+1}))
    }
    render() {
        return (
            <div>
                <h2>当前求和为{this.state.count}</h2>
                <button onClick={this.add}>点我+1</button>
            </div>
        )
    }
}
