import React,{ Component } from 'react';
import { connect } from 'react-redux'
import AlertContainer from './AlertContainer'

class AlertRows extends Component {

    render(){
      const alerts = this.props.alerts.map((alert)=>{
        return <AlertContainer name={alert.name} key={alert.name} id={alert.id}/>
      })

    return (
      <div>
       {alerts}
      </div>
    )
  }
}

const getAlerts = (alerts, filter,searchResult) => {
  switch (filter) {
    case 'SHOW_POPULAR_ALERTS':
      return alerts.filter(a => a.popularAlerts)
    case 'SHOW_YOUR_ALERTS':
      return alerts.filter(a => a.yourAlerts)
    case 'SEARCH':
      return alerts.filter(a => a.name.toLowerCase().includes(searchResult.toLowerCase()))
    default:
        return alerts.filter(a => a.yourAlerts)
  }
}

const mapStateToProps = (state) => {
  return {
    alerts: getAlerts(state.alerts, state.filter.filter , state.filter.searchResult )
  }
}

const AlertRowsContainer = connect(mapStateToProps, null)(AlertRows)
export default AlertRowsContainer
