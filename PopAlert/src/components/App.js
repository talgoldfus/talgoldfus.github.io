import React ,{ Component } from 'react'
import NavBar from './NavBar'
import SearchBar from '../containers/SearchBarContainer'
import AlertsTable from './AlertsTable'
import '../index.css'

class App extends Component{

  render(){
    return (
        <div className="main">
            <NavBar />
            <SearchBar />
            <AlertsTable />
        </div>
      )
  }
}

export default App
