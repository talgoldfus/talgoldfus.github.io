import React,{Component}from 'react';
import {Link ,withRouter } from 'react-router'

class Menu extends Component{

render(){
    var menueLinks = [
      {path:'/',text:'Home'},
      {path:'/policy',text:'Privacy Policy'},
      {path:'/terms', text:'Terms of Use'},
      {path:'/settings', text:'Settings'},
      {path:'/logout', text:'Logout'}
    ]

    const links= menueLinks.map((link)=>{
      if (this.props.location.pathname !== link.path){
        return  (
          <div key={link.text} className="row" >
            <Link
              to={link.path}
              className="menuBtn col-xs-10 col-sm-10 col-md-10"
              onClick={this.props.display}>
              {link.text}
            </Link>
          </div>
        )
      }
    })

    return (
      <div className="row" >
        <div className="col-xs-offset-4 col-xs-7 col-sm-offset-6 col-sm-5 col-md-offset-9 col-md-2 menu">
          <div className="menuWrapper">
            {links}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Menu)
