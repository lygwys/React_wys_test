import React, { Component,lazy,Suspense } from 'react'
import {NavLink,Route} from 'react-router-dom'
import Loding from './Loding'
// import About from './About'
// import Home from './Home'
const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))

export default class Demo extends Component {
    render() {
        return (
            <div>
                <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header"><h2>React Router Demo</h2></div>
                </div>
                </div>
                <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                    {/* <a className="list-group-item" href="./about.html">About</a>
                    <a className="list-group-item active" href="./home.html">Home</a> */}
                        <NavLink className="list-group-item" to="/home">Home</NavLink>
                        <NavLink className="list-group-item" to="/about">About</NavLink>                        
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                    <div className="panel-body">
                        <Suspense fallback={<Loding/>}>
                            <Route path="/about" component={About}/>
                            <Route path="/home" component={Home}/>  
                        </Suspense>                                             
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
