import React,{ Component } from 'react';
import {connect} from 'react-redux'
import AlertEditInput from '../components/AlertEditInput'
import saveEdit from '../actions/saveEdit'

class Alert extends Component {
    constructor(props){
      super(props)
      this.state= {edit: false}
      this.handleClick.bind(this)
      this.save.bind(this)
    }

    save(text,id){
      this.props.saveEdit(text ,id)
      this.setState({ edit: false })
    }

    handleClick() {
      this.setState({ edit: true })
    }

    render(){
      if (!this.state.edit){
        alert =
          (<div>
              <div className="col-md-11 col-sm-10 col-xs-8">
                <p>{this.props.name}</p>
              </div>
              <div className="col-md-1 col-sm-2 col-xs-4" >
                <button onClick={()=>this.handleClick()} className="btn edit">EDIT</button>
              </div>
            </div>)
        }
      else{
         alert= <AlertEditInput save={text=>this.save(text ,this.props.id)} value={this.props.name} />
      }
    return (
      <div className="row alert">
        {alert}
      </div>
    )
  }
}

const AlertContainer = connect(null,{saveEdit})(Alert)
export default AlertContainer
