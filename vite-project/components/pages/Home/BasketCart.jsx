/* eslint-disable react/prop-types */
import { useContext } from 'react'
import './BasketCart.css'
import { StateContext } from '../../../src/context/Context'
// eslint-disable-next-line react/prop-types
function BasketCart({ item }) {
    const { basketDispatch } = useContext(StateContext)
    const deleteBtn = () => {
        basketDispatch({ type: "DELETE_BASKET", payload: item.id })
    }
    return (
        <div className="container2">
            <div className='basket-container'>
                <div className="basket-container-start">
                    <img className='basket-image' src={item.images} alt="" />
                    <div className="basket-container-one-card">
                        <h1 className='cards-title-basket'>{item.title}</h1>
                        <button className='rapoo-btn'>Rapoo</button>

                    </div>
                    <div className='prices'>
                        <h3>{item.price} сум</h3>
                        <h4 > {item.paragraph}</h4>
                    </div>

                    <div className="basket-container-end">
                        <p className='korzina-title'>B корзине {item?.number} товара</p>
                        <h3>Общая сумма:  </h3>
                        <h2>{item?.number * item?.price} сум</h2>
                        <hr />
                        <div className="basket-container-delete">

                            <button className='oformit-btn'>Оформит</button>
                            <img onClick={deleteBtn} className='delete-image' src="https://cdn-icons-png.flaticon.com/128/484/484662.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketCart;