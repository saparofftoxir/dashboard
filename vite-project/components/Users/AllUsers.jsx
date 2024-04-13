import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UsersCard from './UsersCard'
import "./AllUsers.css"
import { useNavigate } from 'react-router-dom'
import { baseUrl } from "../../src/constants"

function AllUsers() {
    const [users, setUsers] = useState([])
    const [name, setName] = useState()
    const [tel, setTel] = useState()
    const [parol, setParol] = useState()
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    const deleteUserBtn = (id) => {
        axios.delete(`${baseUrl}/users/${id}`)
            .then(res => setUser(res.data))

    }

    const editHandler = (id) => {

        navigate(`/edit/${id}`)

    }
    const addNewUser = (event) => {
        event.preventDefault()
        event.target.reset()


        const newUser = {
            name: name,
            tel: tel,
            parol: parol,
            done: false
        }
        console.log(newUser)
        
        axios.post(`${baseUrl}/users`, newUser)
            .then(res => {
                setUser(res.data)
            })

    }
    const clearAllBtn = () => {
        users.forEach(item => {
            axios.delete(`${baseUrl}/users/${item.id}`)
                .then(res => {
                    setUser("")
                })
        })
    }
    const checkUser = (checked, item, id) => {
        let check = {
            ...item,
            done: checked
        }
        axios.put(`${baseUrl}/users/${id}`, check) 
            .then(res => setUser(res.data))

    }
    useEffect(() => {
        async function fetchData() {
            axios.get(`${baseUrl}/users`)
                .then(res => setUsers(res.data))

        }
        fetchData()

    }, [user])
    console.log(users)
    return (
        <>
            <div className="user-form-container">

                <h2>Add users</h2>

                <form onSubmit={addNewUser} className='user-form'>
                    <input onChange={e => setName(e.target.value)} required type="text" placeholder='enter name' />
                    <input onChange={e => setTel(e.target.value)} required type="tel" placeholder='enter tel' />
                    <input onChange={e => setParol(e.target.value)} required autoComplete='off' type="password" placeholder='enter parol' />
                    <button  >add Users</button>
                    <button onClick={clearAllBtn}>clear all</button>

                </form>
            </div>
            <div className='allusers-container'>
                {users.map(item => <UsersCard
                    checkUser={checkUser}
                    editHandler={editHandler}
                    deleteUserBtn={deleteUserBtn}
                    key={item.id}
                    item={item} />)}
            </div>
        </>
    )
}


export default AllUsers; 