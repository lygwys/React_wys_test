import React, { Component } from 'react'

export default class index extends Component {
    state={carName:'奔驰c63'}

    increment=()=>{
        const {value}=this.selectNumber
        this.props.jia(value*1)
    }
    decrement=()=>{
        const {value}=this.selectNumber
    }
    incrementIfOdd=()=>{
        const {value}=this.selectNumber
    }
    incrementAsync=()=>{
        const {value}=this.selectNumber
    }
    render() {
         return (            
            <div>                
                <h1>当前求和为：{this.props.count}</h1>
                <select ref={c=>this.selectNumber=c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}
