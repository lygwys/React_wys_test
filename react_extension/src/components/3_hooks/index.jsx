import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// export default class Demo extends Component {
//     state = {count:0}

//     myRef = React.createRef()

//     add = () => {
//         this.setState(state=>({count:state.count+1}))
//     }

//     unmount = () => {
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }

//     show = () => {
//         alert(this.myRef.current.value)
//     }

//     componentDidMount(){
//         this.timer = setInterval(() => {
//             this.setState(state => ({count:state.count+1}))
//         }, 1000);
//     }

//     componentWillUnmount(){
//         clearInterval(this.timer)
//     }
    
//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.myRef} />
//                 <h2>当前求和为{this.state.count}</h2>
//                 <button onClick={this.add}>点我+1</button>
//                 <button onClick={this.unmount}>卸载组件</button>
//                 <button onClick={this.show}>点击提示数据</button>
//             </div>
//         )
//     }
// }



function Demo(){
    //console.log('Demo');
    const [count,setCount] = React.useState(0)
    const [name,setName] = React.useState('tom')
    const myRef = React.useRef()

    // React.useEffect(() => {
    //     console.log('@');
    // },[count])

    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount(count => count+1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    },[])

    function add(){
        setCount(count => count+1)
    }

    function show(){
        alert(myRef.current.value)
    }


    function change(){
        setName('jack')
    }

    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    return (
        <div>
            <input type="text" ref={myRef} />
            <h2>当前求和为{count}</h2>
            <h2>当前名字为{name}</h2>
            <button onClick={add}>点我+1</button>
            <button onClick={change}>改名</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>点我提示数据</button>
        </div>
    )
}

export default Demo