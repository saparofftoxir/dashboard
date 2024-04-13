import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { baseUrl } from '../../src/constants'
import axios from 'axios'


function EditCar() {
  const [currentUser, setCurrentUser] = useState(null)
  const [name, setName] = useState(currentUser?.name)
  const [price, setPrice] = useState(currentUser?.tel)
  const [rasm, setRasm] = useState(currentUser?.parol)
  const navigate = useNavigate()
  const { id } = useParams()
  const editCarsHandler = () => {
    const editCar = {
      name: name,
      price: price,
      rasm:rasm,
      id: id
    }
    axios.put(`${baseUrl}/cars/${id} `, editCar)
    .then(res => {
      console.log(res.data)
    })
    navigate('/cars')
    console.log(editCar)
  }

  useEffect(() => {

    axios.get(`${baseUrl}/cars/${id}`).then(res => setCurrentUser(res.data))
  }, [id]) 

  console.log(currentUser)


  return (
    <div className="user-form-container">
      <h2>Edit cars</h2>


      <form className='user-form' onSubmit={editCarsHandler}>
        <input onChange={e => setName(e.target.value)} value={name} required type="text" placeholder='enter name' />
        <input onChange={e => setPrice(e.target.value)} value={price} required type="tel" placeholder='enter price' />
        <input onChange={e => setRasm(e.target.value)} value={rasm}  type="text" placeholder='enter image' />
        <button> edit Users</button>
      </form>
    </div>
  )
}

export default EditCar