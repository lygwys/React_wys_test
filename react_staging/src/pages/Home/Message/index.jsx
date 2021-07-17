import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Detail from './Detail'

export default class index extends Component {
    state={
        messageArr:[
            {id:'01',title:'消息1'},
            {id:'02',title:'消息2'},
            {id:'03',title:'消息3'},
        ]
    }
    render() {
        const {messageArr}=this.state
        return (
            <div>
                <ul>
                    {
                       messageArr.map((messObj)=>{
                        return(
                            <li key={messObj.id}>
                                <Link to="/home/message/detail">{messObj.title}</Link>
                            </li> 
                        )
                       }) 
                    }
                </ul>
                <hr />
                <Route path="/home/message/detail" component={Detail}/>
            </div>
        )
    }
}
