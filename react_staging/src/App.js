import React,{Component} from 'react'
//{Component}不是结构赋值，而是react的多种暴露方式
import Hello from './components/Hello'
import Wellcome from './components/Wellcome'

export default class App extends Component{
    render(){
        return(
            <div>
                <Hello/>
                <Wellcome/>
            </div>
        )
    }
}