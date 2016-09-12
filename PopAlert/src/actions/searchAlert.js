const searchAlert = (text)=>{
  return {
    type: 'SHOW_SEARCH_RESULTS',
    filter: 'SEARCH' ,
    searchResult: text
   }
}

export default searchAlert
