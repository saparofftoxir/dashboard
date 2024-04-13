import React, { useEffect, useState } from 'react'
import "./Admin.css"
import axios from 'axios'
import { baseUrl } from "../../src/constants"
import TaskCard from './TaskCard'

function Admin() {
    const [name, setName] = useState("")
    const [task, setTask] = useState(null)
    const [tasks, setTasks] = useState([]);
    const [tasksDisplay, setTasksDisplay] = useState([]);
    const addTaskHandler = (event) => {
        event.preventDefault()
        const newTask = {
            name: name,
            done: false,
        }
        axios.post(`${baseUrl}/tasks`, newTask)
            .then(res => {
                setTask(res.data)
            })

    }


    async function fetchData() {
        axios.get(`${baseUrl}/tasks`)
            .then(res => {
                setTasks(res.data)
                setTasksDisplay(res.data)
            })

    }
    const deleteTask = (id) => {
        axios.delete(`${baseUrl}/tasks/${id}`)
            .then(res => {
                setTask(res.data)
            })
    }
    const checkTask = (item, id, checked) => {

        let check = {
            ...item,
            done: checked
        }
        axios.put(`${baseUrl}/tasks/${id}`, check)
    }
    const clearAllBtn = () => {
        tasks.forEach(item => {
            axios.delete(`${baseUrl}/tasks/${item.id}`)
                .then(res => {
                    setTask(null)

                })
        })
    }
    useEffect(() => {
        fetchData()
    }, [task])
    console.log(tasks);

    return (
        <div className='form-container'>
            <form onSubmit={addTaskHandler}>
                <input onChange={e => setName(e.target.value)} type="text" placeholder='enter  task' />
            </form>
            <div className="form-pages">
                <button>All</button>
                <button>Panding</button>
                <button>Completed</button>
                <button onClick={clearAllBtn}>Clear All</button>
            </div>
            {/* [].map */}
            {tasksDisplay.map(item => <TaskCard
                checkTask={checkTask}
                deleteTask={deleteTask}
                key={item.id} item={item}
            />)}
        </div>

    )
}

export default Admin;