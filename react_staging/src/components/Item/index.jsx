import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    state ={mouse:false}
    handleMouse=(flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }
    handleCheck=(id)=>{
        return (e)=>{
            this.props.updateTodo(id,e.target.checked)
        }
    }
    render() {
        const {id,name,done}=this.props
        const {mouse}=this.state
        return (
            <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)}/>
                    {/* 此处如果用checked就报错必须使用onChange    有bug */}
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
            </li>
        )
    }
}
