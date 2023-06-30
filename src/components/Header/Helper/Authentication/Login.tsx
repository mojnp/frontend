import { useState } from "react"
import './Login.scss'
import axios from "axios"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
  return (
    <div className='main-login-page'>
        <div className='login-container'>
            <h2>Login</h2>
            <div className='inputs-div'>
                <input autoComplete="false" required className='username-input' value={username} type="text" placeholder='Username' onChange={(e)=>setUsername(e.target.value)}/>
                <input required className='pass-input' value={password} type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button className='submit-btn' onClick={()=>{
              const form = new FormData()
              form.append("username", username)
              form.append("password", password)
              axios.post("https://api.mojnovipazar.info/auth/login", form).then((r)=>{
                r.data && sessionStorage.setItem("token",r.data.access_token)
              })
            }}>Submit</button>
        </div>
    </div>
  )
}
export default Login