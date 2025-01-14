/* eslint-disable no-unused-vars */
export const initialStateCard = {
    basket: []
}
export const basketReducer = (state, action) => {
    switch (action.type) {
        case "ADD_BASKET":
            return state = {
                ...state,
                basket: [...state.basket, action.payload]
            }
        case "DELETE_BASKET": {
            const filteredBasket = state.basket.filter(item => item.id !== action.payload)
            return state = {
                ...state,
                basket: filteredBasket
            }
        }
        default:
            return state;
    }
}