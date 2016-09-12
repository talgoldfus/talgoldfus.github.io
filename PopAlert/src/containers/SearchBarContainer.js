import React,{ Component } from 'react';
import { connect } from 'react-redux'
import searchAlert from '../actions/searchAlert'

class SearchBar extends Component {
    constructor(props){
      super(props)
      this.handleSubmit.bind(this)
    }

    handleSubmit(event){
      event.preventDefault()
      this.props.searchAlert(this.refs.search.value.trim())
      this.refs.search.value=""
    }

    render(){
    return (
        <div className="row">
              <form
              className="col-xs-offset-1 col-xs-10 searchBar"
              onSubmit={ event =>this.handleSubmit(event)}>
                <input id="search"  ref='search' type="text" placeholder="Find Alerts" />
                <img id="searchIcon" src={require('../assets/images/search-icon-01.svg')} alt="searchIcon"/>
              </form>
         </div>
    )
  }
}

const SearchBarContainer = connect(null,{searchAlert})(SearchBar)
export default SearchBarContainer
