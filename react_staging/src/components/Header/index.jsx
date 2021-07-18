import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class index extends Component {
    back = ()=>{
        this.props.history.goBack()
    }
    forward = ()=>{
        this.props.history.goForward()
    }
    go = ()=>{
        this.props.history.go(2)
    }
    render() {
        return (            
            <div className="page-header">
                <h2>React Router Demo!</h2>

                <button onClick={this.back}>后退</button>&nbsp;
                <button onClick={this.forward}>前进</button>&nbsp;
                <button onClick={this.go}>go +2</button>

            </div>
        )
    }
}

export default  withRouter(index)
