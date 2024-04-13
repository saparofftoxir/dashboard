import React, { useEffect, useState } from 'react'
import { baseUrl } from "../../src/constants"
import axios from 'axios'
import CarsCard from './CarsCard'
import { useNavigate, useParams } from 'react-router-dom'


function Cars() {
    const {id}=useParams()
    const [cars, setCars] = useState([])
    const [car, setCar] = useState(null)
    const navigate=useNavigate()
    async function fetchData() {
        axios.get(`${baseUrl}/cars`)
            .then(res => setCars(res.data))
    }
    const deleteCar = (id) => {
        axios.delete(`${baseUrl}/cars/${id}`)
        .then(res=> {
            setCar(res.data)
        })

    }
    const editCarHandler=(id)=> {
        navigate(`/editcar/${id}`)
        
    }
    useEffect(() => {
        fetchData()
    }, [car])

    console.log(cars)
    return (
        <div>
            {cars.map(item => <CarsCard 
            deleteCar={deleteCar}
            editCarHandler={editCarHandler}
            key={item.id} item={item} />)}
        </div>
    )
}

export default Cars