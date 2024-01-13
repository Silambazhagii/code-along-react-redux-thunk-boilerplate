import axios from "axios"

const action_provider=()=>{
  return(dispatch)=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((resp)=>{
      dispatch({type: 'fetchData', payload: resp })
    })
  }
}

export default action_provider
