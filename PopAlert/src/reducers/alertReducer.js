const alertReducer = (state = {alerts:[]}, action) => {
  switch (action.type) {
     case 'GET_ALERTS':
       return []
     case 'EDIT_ALERT':
       return state.map(alert =>
         alert.id === action.id ? { ...alert, name: action.name } :  alert
       )
     default:
      return state
  }
}

export default alertReducer
