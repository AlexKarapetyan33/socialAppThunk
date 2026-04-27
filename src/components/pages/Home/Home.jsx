import axios from "axios"
import { useState } from "react"



export const Home = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('https://social-network.samuraijs.com/api/1.0/auth/login', {email, password})
    .then((res) => console.log(res.data))
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
