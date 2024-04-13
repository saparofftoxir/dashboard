import React, { useState } from 'react'
import "./Admin.css"
function TaskCard({ item, deleteTask, checkTask }) {

    const [checked, setChecked] = useState(item.done)



    return (
        <div className='form-container-two'>
            <div className="card-one">
                <input style={{ cursor: 'pointer' }} checked={checked} onChange={e => {
                    setChecked(e.target.checked)
                    checkTask(e.target.checked, item.id, item)
                }} type="checkbox" />
                <h2 className='task-name' style={{ textDecoration: checked ? "line-through" : "none" }}>{item.name}</h2>
                <button onClick={() => deleteTask(item.id)}>Delete</button>
            </div>
        </div>
    )
}

export default TaskCard;  