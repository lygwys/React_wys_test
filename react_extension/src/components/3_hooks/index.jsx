import React, { Component } from 'react'

// export default class Demo extends Component {
//     state = {count:0}

//     add = () => {
//         this.setState(state=>({count:state.count+1}))
//     }
//     render() {
//         return (
//             <div>
//                 <h2>当前求和为{this.state.count}</h2>
//                 <button onClick={this.add}>点我+1</button>
//             </div>
//         )
//     }
// }

function Demo(){
    const [count,setCount] = React.useState(0)
    function add(){
        //setCount(count+1)//setCount第一种写法
        setCount(count => count+1)//setCount第二种写法，函数形式，传入先前状态，返回新的状态
    }
    return (
        <div>
            <h2>当前求和为{count}</h2>
            <button onClick={add}>点我+1</button>
        </div>
    )
}

export default Demo