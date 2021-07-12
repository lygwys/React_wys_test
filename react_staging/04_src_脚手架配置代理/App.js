import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
    getStudentData = ()=>{
        axios.get('http://localhost:3000/api1/students').then(
            response => {console.log('返回数据成功了：',response.data);},
            error => {console.log('返回数据失败了：',error);}
        )
    }
    getCarsData = ()=>{
        axios.get('http://localhost:3000/api2/cars').then(
            response => {console.log('返回cars数据成功了：',response.data);},
            error => {console.log('返回cars数据失败了：',error);}
        )
    }
    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>获取学生数据</button>
                <button onClick={this.getCarsData}>获取car数据</button>
            </div>

        )
    }
}
