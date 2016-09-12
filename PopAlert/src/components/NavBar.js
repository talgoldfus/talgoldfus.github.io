import React, { Component } from 'react'
import { Link } from 'react-router'
import Menu from './Menu'

class NavBar extends Component {
  constructor(props){
    super(props)
    this.state = {clicked:false}
  }

  handleClick(){
    this.setState(state => {
      return {clicked: !state.clicked}
    })
  }

  render(){
    return (
      <div>
        <div className="row navBar">
          <div className="col-xs-offset-2 col-xs-7 col-md-offset-2 col-md-8">
            <Link to='/'><h1>POP ALERTS</h1></Link>
          </div>
          <div className="col-xs-3 col-md-2">
            <span >
              <img onClick={this.handleClick.bind(this)} id="menuIcon" src={require('../assets/images/menu-icon-01.png')} alt="menuIcon"/>
            </span>
          </div>
        </div>
        { this.state.clicked && <Menu display={this.handleClick.bind(this)}/> }
      </div>
    )
  }
}

export default NavBar
