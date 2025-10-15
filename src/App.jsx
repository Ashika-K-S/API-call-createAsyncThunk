import { useEffect } from "react";
import{useSelector,useDispatch} from 'react-redux'
import { fetchData } from "./dataslice";
function App(){
  const dispatch=useDispatch()
  const {items,status,error}=useSelector((state)=>state.data)
  useEffect(()=>{
      dispatch(fetchData())
    },[dispatch])
  return(
    <div>
      <h2>Async</h2>
      {status==="loading" &&<p>loading</p>}
      {status==="failed"&&<p>Error:{error}</p>}
      <ul>
        {items.map((post)=>(
          <li key={post.id}>{post.text}</li>
        ))}
      </ul>
    </div>
  )
}export default App