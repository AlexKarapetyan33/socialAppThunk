import axios from "axios"
import { useState } from "react"
import { loginTC } from "../../../reducers/loginReducer"
import { useDispatch } from "react-redux"



export const Home = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginTC({email : 'alexkarapetyan009@gmail.com', password : 'Gazankrolik1234.'}))
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button>Login</button>
        </form>
    </div>
  )
}
