import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
    getStudentData = ()=>{
        axios.get('http://localhost:3000/students').then(
            response => {console.log('返回数据成功了：',response.data);},
            error => {console.log('返回数据失败了：',error);}
        )
    }
    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>获取学生数据</button>
            </div>

        )
    }
}
