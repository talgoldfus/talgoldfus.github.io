const changeFilterAction = (newFilter)=>{
  return {
    type: 'SET_FILTER',
    filter: newFilter
  }
}

export default changeFilterAction
