/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./Products.css"
import { useNavigate } from 'react-router-dom'

function ProductsCard({ item }) {
    const navigate=useNavigate()
    const detailPageBtn=()=> {
        navigate(`/detail/${item.id}`)
        navigate(item.id)
    }
    return (
        <div className='products-containerr'>
            <div className="product-card">
                <img onClick={detailPageBtn} src={item.image} alt={item.title} />
                <h2>{item.title}</h2>

            </div>
        </div>
    )
}

export default ProductsCard;