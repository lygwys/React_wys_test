import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'//yarn add nanoid
import './index.css'

export default class Header extends Component {
    static propTypes ={
        add:PropTypes.func.isRequired
    }
    handleKeyUp=(e)=>{
        const {keyCode,target}=e
        if (keyCode !==13) return//回车键值为13
        if(target.value.trim()===''){
            alert('输入不能为空');
            return;
        }
        const todoObj = {
            id:nanoid(),
            name:target.value,
            done:false
        }
        this.props.add(todoObj)
        target.value=''
    }
    render() {
        return (
            <div className="todo-header">
            <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
