/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Detail.css"
import { StateContext } from '../../../src/context/Context'

function Detail() {

  const { id } = useParams()
  const [product, setProduct] = useState([])
  axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(res => setProduct((res.data)))
  return (
    <div className='detail-container'>
      <div className="detail-card">
        <img src={product.image} alt="" />

      </div>
      <div className="detail-card-right">

        <h2>{product.category}</h2>
        <h2>{product.title}</h2>

        <hr />
        <p>{product.description}</p>
        <h3>{product.price} sum</h3>
        <h1>{product.count}</h1>
        <div className="detail-card-btns">
          <div className="detail-card-btn-start">
            <button>10 count (Pack of 6)</button>
            <button>22 count (Pack of 4)</button>

          </div>
          <div className="detail-card-btn-end">
            <button>44 count (Pack of 4)</button>
            <button>44 count (Pack of 1)</button>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Detail;