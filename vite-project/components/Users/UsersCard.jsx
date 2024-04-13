import React, { useState } from 'react'
import "./AllUsers.css"
function UsersCard({ item, deleteUserBtn, editHandler, checkUser }) {
  const [checked, setChecked] = useState(item.done)

  return (
    <div className='allusers-container'>
      <div className="users-card">
        <h2>Name: {item.name}</h2>
        <h2>Tel:{item.tel}</h2>
        <h2>Parol:{item.parol}</h2>
        <input checked={item.checked} onChange={e => {
          setChecked(e.target.checked)
          checkUser(e.target.checked, item.id, item)
        }} type="checkbox" />
        <h2>{checked ? "Tugatgan" : "Tugatmagan"} </h2>
        <button onClick={() => editHandler(item.id)} className='edit'>edit</button>
        <button onClick={() => deleteUserBtn(item.id)} className='edit'>delete</button>
      </div>
    </div>
  )
}

export default UsersCard;