const reducer = (state, action) =>{
  switch (action.type) {
    case 'fetchData':
      return{
        data:action.payload
      }
  }
}

export default reducer