import React, { Component } from 'react'

// export default class Demo extends Component {
//     state = {count:0}

//     add = () => {
//         this.setState(state=>({count:state.count+1}))
//     }

//     componentDidMount(){
//         setInterval(() => {
//             this.setState(state => ({count:state.count+1}))
//         }, 1000);
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
    //console.log('Demo');
    const [count,setCount] = React.useState(0)
    const [name,setName] = React.useState('tom')

    // React.useEffect(() => {
    //     console.log('@');
    // },[count])

    React.useEffect(() => {
        setInterval(() => {
            setCount(count => count+1)
        }, 1000);
    },[])
    
    function add(){
        setCount(count => count+1)
    }

    function change(){
        setName('jack')
    }

    return (
        <div>
            <h2>当前求和为{count}</h2>
            <h2>当前名字为{name}</h2>
            <button onClick={add}>点我+1</button>
            <button onClick={change}>改名</button>
        </div>
    )
}

export default Demo