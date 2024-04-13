/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { StateContext } from '../../src/context/Context'
import BasketCart from '../pages/Home/BasketCart'
import "./Basket.css"

function Basket() {
  const { basketState } = useContext(StateContext)
  if (basketState.basket.length === 0) {
    return <div>
      <h2>No Products</h2>
    </div>
  }
  const total = basketState.basket.map(item => {
    return item.price * item.number
  }).reduce((a, b) => (a + b))

  return (
    <div className='container-basket-three'>
      <div className="korzina-container">
        <h2>Корзина</h2>
        <div className="basket-theme">
          <button className='buy-btn'>Стандартный покупки <sup>0</sup></button>
          <button className='buy-btn'>Товары на рассрочку <sup>0</sup></button>
          <button className='buy-btn'>Общая сумма {total} </button>
        </div>
      </div>
      {basketState.basket.map(item => (
        <BasketCart key={item.id} item={item} />))}

    </div>
  )
}


export default Basket;