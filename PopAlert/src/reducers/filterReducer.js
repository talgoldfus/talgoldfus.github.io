const filterReducer = (state = {filter:'SHOW_POPULAR_ALERTS' ,searchResult:""}, action) => {
    switch (action.type) {
    case 'SET_FILTER':
      return {filter: action.filter ,searchResult:""}
    case 'SHOW_SEARCH_RESULTS':
        return {filter: action.filter ,searchResult: action.searchResult }
    default:
      return state
  }
}

export default filterReducer
