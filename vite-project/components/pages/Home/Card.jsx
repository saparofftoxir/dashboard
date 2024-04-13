/* eslint-disable react/prop-types */
import "./Cards.css"
import { StateContext } from '../../../src/context/Context'
import { useContext, useState } from "react"
// eslint-disable-next-line react/prop-types
function Card({ item }) {
    const [number, setNumber] = useState(1)
    const [error, setError] = useState('')
    const { basketState, basketDispatch } = useContext(StateContext)
    const addToBasket = () => {

        const checkInBasket = basketState.basket.some(element => element.id === item.id)
        console.log(checkInBasket)
        if (checkInBasket) {
            alert('bu oldin qoshilgan')
            return
        }
        const newProducts = {
            ...item,
            number: + number
        }
        basketDispatch({ type: "ADD_BASKET", payload: newProducts })
        alert('Added to basket')
    }
    return (
        <div className='cards'>
            <img src={item.images} alt="" />
            <h2 className='cards-title'>{item.title}</h2>
            <h2>{item.price} сум</h2>
            <h2>{item.star}</h2>
            <p className='products-prices'> {item.paragraph}</p>
            <input onChange={e => {
                if (e.target.value === "" && e.target.value !== "") {
                    setError('Please enter the correct number')
                } else {
                    setError("")
                }
                setNumber(e.target.value)
            }} value={number} className="the-number-btn" type="number" placeholder="the number" />
            <p>{error && error}</p>
            <button disabled={number < 1} onClick={addToBasket} className='paragraph-btn'>
                Купить сейчас
            </button>
        </div>
    )
}

export default Card;