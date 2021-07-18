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

    replaceShow=(id,title)=>{
        this.props.history.replace(`/home/message/detail/${id}/${title}`)
    }

    render() {
        const {messageArr}=this.state
        return (
            <div>
                <ul>
                    {
                       messageArr.map((msgObj)=>{
                        return(
                            <li key={msgObj.id}>
                                <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                                &nbsp;<button>push查看</button>
                                &nbsp;<button onClick={()=>this.replaceShow(msgObj.id,msgObj.title)}>replace查看</button>
                                {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}
                                {/* <Link to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link> */}
                            </li> 
                        )
                       }) 
                    }
                </ul>
                <hr />
                <Route path="/home/message/detail/:id/:title" component={Detail}/>
                {/* <Route path="/home/message/detail/" component={Detail}/> */}
            </div>
        )
    }
}
