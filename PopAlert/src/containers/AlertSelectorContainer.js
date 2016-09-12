import React,{ Component }from 'react';
import { connect } from 'react-redux'
import changeFilter from '../actions/changeFilter'
import classNames from 'classnames'

class AlertSelector extends Component {

  constructor(props){
    super(props)
    this.state ={clicked: false}
    this.handleClick.bind(this)
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.currentFilter.filter === "SEARCH"){
      this.setState({clicked: false})
    }
  }

  handleClick(event,filter,pressed){
    event.preventDefault()
    this.props.changeFilter(filter)
    this.setState({clicked:pressed})
  }

  render(){
      var popularBtnClass = classNames({
        'btn': true,
        'selector':true,
        'btn-pressed': this.state.clicked ==='popular'
      })

      var yourBtnClass = classNames({
        'btn': true,
        'selector':true,
        'btn-pressed': this.state.clicked ==='your'
      })

    return (
      <div className="row">
      <div className="wrapper col-xs-12">
        <div className="btn-group ">
            <button
              className={popularBtnClass}
              type="button"
              onClick={event=>this.handleClick(event,"SHOW_POPULAR_ALERTS","popular")}>
              Popular Alerts
            </button>
            <button
              className={yourBtnClass}
              type="button"
              onClick={event=>this.handleClick(event,"SHOW_YOUR_ALERTS","your")}>
              Your Alerts
            </button>
          </div>
         </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {currentFilter: state.filter}
}

const AlertSelectorContainer = connect(mapStateToProps,{changeFilter})(AlertSelector)
export default AlertSelectorContainer
