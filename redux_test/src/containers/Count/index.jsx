import React, { Component } from 'react'
import {connect} from 'react-redux'

class Count extends Component {
    render() {
        return (
            <div>
                <h2>当前求和为：{this.props.he}</h2>
            </div>
        )
    }
}

export default connect(
    state => ({he:state}),
    {}
)(Count)
