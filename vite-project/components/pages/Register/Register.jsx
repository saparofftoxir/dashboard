/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Register.css"
import { StateContext } from '../../../src/context/Context'
function Register() {
  const { userDispatch, userState } = useContext(StateContext)
  const [name, setName] = useState("")
  const [tel, setTel] = useState("")
  const [parol, setParol] = useState("")
  const navigate = useNavigate()
  const hendleUser = (e) => {
    e.preventDefault();
    const check = userState.users.some(item => item.tel === tel)
    if (check) {
      alert('bunday raqam oldin royhatdan otgan')
      return;
    }
    const newUser = {
      name: name, tel: tel, parol: parol
    }
    userDispatch({ type: 'ADD_USER', payload: newUser })
    navigate('/login')


  }
  return (
    <div className="login-container">
      <h1>Register</h1>
      <form onSubmit={hendleUser}>
        <input onChange={(e) => setName(e.target.value)} required type="text" placeholder='enter name' />
        <input onChange={(e) => setTel(e.target.value)} required type="tel" placeholder="enter tel number" />
        <input onChange={(e) => setParol(e.target.value)} autoComplete='off' required type="password" placeholder="enter password" />
        <button >Login</button>
      </form>
      <div>
        <span>Oldin ro'yhatdan otganmisiz ?
          Unda <Link to={'/login'}>Login</Link>
        </span>
      </div>

    </div>
  )
}

export default Register