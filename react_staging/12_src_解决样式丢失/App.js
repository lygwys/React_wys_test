import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'

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
                        {/* <NavLink activeClassName="atguigu" className="list-group-item" to="/home">Home</NavLink>
                        <NavLink activeClassName="atguigu" className="list-group-item" to="/about">About</NavLink>  */}
                        <MyNavLink to="/atguigu/home">Home</MyNavLink>
                        <MyNavLink to="/atguigu/about">About</MyNavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                    <div className="panel-body">
                            <Switch>
                                <Route path="/atguigu/about" component={About}/>
                                <Route path="/atguigu/home" component={Home}/> 
                            </Switch>              
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
