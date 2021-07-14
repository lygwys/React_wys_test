import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
    state = {users:[]}
    
    saveUsers = (users)=>{
        this.setState({users})
    }

    render() {
        const {users} = this.state
        return (
            <div className="container">
                {<Search saveUsers={this.saveUsers}/>}
                {<List users={users}/>}
          </div>
        )
    }
}
