import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'

 class Person extends Component {
    addPerson=()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name,age}
        //console.log(personObj)
        this.props.jiaYiRen(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }
    
    render() {
        //console.log(this)
        return (
            <div>
                <h1>我是Person组件,当前求和为：{this.props.he}</h1>
                <input ref={c=>this.nameNode=c} type="text" placeholder="请输入名字" />
                <input ref={c=>this.ageNode=c} type="text" placeholder="请输入年龄" />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.yiduiren.map((p)=>{
                            return <li key={p.id}>名字：{p.name}年龄：{p.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({yiduiren:state.rens,he:state.he}),
    {jiaYiRen:createAddPersonAction}
)(Person)