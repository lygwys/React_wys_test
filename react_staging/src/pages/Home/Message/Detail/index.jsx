import React, { Component } from 'react'
// import qs from 'querystring'

const DetaiData= [
    {id:'01',content:'你好，中国'},
    {id:'02',content:'你好，尚硅谷'},
    {id:'03',content:'你好，未来的自己'},
]

export default class index extends Component {
    render() {
        const {id,title}=this.props.match.params

        // const {search}=this.props.location
        // const {id,title}=qs.parse(search.slice(1))

        // const {id,title}=this.props.location.state || {}

        const findResult = DetaiData.find((detailObj)=>{
            return detailObj.id===id
        }) || {}
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        )
    }
}
