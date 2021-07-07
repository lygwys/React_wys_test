import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    render() {
        const {name,done}=this.props
        return (
            <li>
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
