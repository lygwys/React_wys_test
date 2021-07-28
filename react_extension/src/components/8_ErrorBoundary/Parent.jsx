import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    state ={
        hasError:''//标识子组件是否产生错误
    }
    static getDerivedStateFromError(error){//子组件有错时触发，并更新hasError的状态
        console.log('@@@',error);
        return {hasError:error}
    }
    render() {
        console.log('###');
        return (
            <div>
                <h2>我是Parent组件</h2>
                {this.state.hasError?<h2>当前网络有问题，稍后再试</h2>:<Child/>}
                {/* 根据hasError的状态显示 */}
            </div>
        )
    }
}
