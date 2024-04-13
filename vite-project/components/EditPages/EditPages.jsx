import React, { useEffect, useState } from 'react'
import "./EditPages.css"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../../src/constants'
function EditPages() {
    const [currentUser, setCurrentUser] = useState(null)
    const [name, setName] = useState(currentUser?.name)
    const [tel, setTel] = useState(currentUser?.tel)
    const [parol, setParol] = useState(currentUser?.parol)
    const navigate = useNavigate()
    const { id } = useParams()
    const editUserHandler = () => {
        const editUser = {
            name: name,
            tel: tel,
            parol: parol,
            id: id
        }
        axios.put(`${baseUrl}/users/${id} `, editUser)
            .then(res => {
                console.log(res.data)
            })
        console.log(editUser)
        navigate('/allusers')
    }

    useEffect(() => {

        axios.get(`${baseUrl}/users/${id}`).then(res => setCurrentUser(res.data))
    }, [id])

    console.log(currentUser)


    return (
        <div className="user-form-container">
            <h2>Edit users</h2>


            <form className='user-form'>
                <input onChange={e => setName(e.target.value)} value={name} required type="text" placeholder='enter name' />
                <input onChange={e => setTel(e.target.value)} value={tel} required type="tel" placeholder='enter tel' />
                <input onChange={e => setParol(e.target.value)} value={parol} required autoComplete='off' type="password" placeholder='enter parol' />
                <button onClick={editUserHandler}> edit Users</button>
            </form>
        </div>
    )  
}

export default EditPages;