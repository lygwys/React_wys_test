import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    state ={mouse:false}
    handleMouse=(flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }
    render() {
        const {name,done}=this.props
        const {mouse}=this.state
        return (
            <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" defaultChecked={done}/>
                    {/* 此处如果用checked就报错必须使用onChange    有bug */}
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{display:'none'}}>删除</button>
            </li>
        )
    }
}
