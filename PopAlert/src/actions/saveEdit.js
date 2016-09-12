const saveEdit = (alertName,id)=>{
  return {
    type: 'EDIT_ALERT',
    name: alertName,
    id:id
  }
}

export default saveEdit
