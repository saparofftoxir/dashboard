/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom"
import "./Login.css"
import { useContext, useState } from "react"
import { StateContext } from "../../src/context/Context"
function Login() {
  const { userState,userDispatch } = useContext(StateContext)
  console.log(userState)
  const [tel,setTel]=useState("")
  const [parol,setParol]=useState("")
  const navigate =useNavigate()
  const handleLogin = (e) => {
    e.preventDefault()
    const currentUser =userState.users.find(item=> item.tel === tel && item.parol === parol)
    if(!currentUser) {
      alert('parol yoki tel xato')
      return;
    }
    console.log(currentUser)
    userDispatch({type: 'SET_CURRENTUSER', payload: currentUser})
    navigate('/')
  }
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}  >
        <input required onChange={e => setTel(e.target.value)} type="tel" placeholder="enter tel number" />
        <input required onChange={e => setParol(e.target.value)} autoComplete="off" type="password" placeholder="enter pasword" />
        <button>Login</button>
      </form>
      <div>
        <span>Hali ro'yhatdan otmaganmisiz ?
          Unda <Link to={'/register'}>Register</Link>
        </span>
      </div>

    </div>
  )
}   

export default Login;