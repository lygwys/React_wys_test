import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <Header/>
                </div>
                </div>
                <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                    {/* <a className="list-group-item" href="./about.html">About</a>
                    <a className="list-group-item active" href="./home.html">Home</a> */}
                        <Link className="list-group-item" to="/home">Home</Link>
                        <Link className="list-group-item" to="/about">About</Link>                        
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                    <div className="panel-body">
                            <Route path="/about" component={About}/>
                            <Route path="/home" component={Home}/>                   
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
