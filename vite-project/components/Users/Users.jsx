/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Users.css"
function Users() {
    const [users, setUsers] = useState([])
    async function FetchData() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => setUsers(res.data))
    }
    useEffect(() => {
        FetchData()
    }, [])
    console.log(users)
    return (

        <table>
            <thead>
                <th>No</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>
                <th>Company</th>
            </thead>
            <tbody>
                {users.map((item, index) => (
                    <tr key={index} item={item}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.address.street}</td>
                        <td>{item.company.bs}</td>
                    </tr>

                ))}
            </tbody>
        </table> 
    )
}

export default Users