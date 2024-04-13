/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductsCard from './ProductsCard'
function Products() {
    const [products, setProducts] = useState([])
    function FetchData() {
        axios.get("https://fakestoreapi.com/products")
            .then(res => setProducts(res.data))
            console.log(products)
    }
    useEffect(() => {
        FetchData()
    })
    return (
        <div className='products-container'>
            {products.map((item => <ProductsCard key={item.id} item={item} />))}

        </div>
    )

}

export default Products;