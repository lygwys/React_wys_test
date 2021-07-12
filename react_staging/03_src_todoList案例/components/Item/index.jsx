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
    handleDelete=(id)=>{
        if(window.confirm('确定删除码？')){
           this.props.deleteTodo(id)
        }
    }
    render() {
        const {id,name,done}=this.props
        const {mouse}=this.state
        return (
            <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    {/* 此处如果用checked就报错必须使用onChange    有bug */}
                    <span>{name}</span>
                </label>
                <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
            </li>
        )
    }
}
