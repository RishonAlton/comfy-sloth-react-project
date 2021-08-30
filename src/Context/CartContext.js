import React, { useContext, useEffect, useReducer } from "react"

import reducer from "../Reducers/cartReducer"
import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    CLEAR_CART,
    CHANGE_ITEM_AMOUNT,
    COUNT_CART_TOTALS
} from "../Reducers/actions"


const CartContext = React.createContext()

const getLocalStorage = () => {
    let cart = localStorage.getItem("cart")
    if(cart) {
        return JSON.parse(localStorage.getItem("cart"))
    }
    else {
        return []
    }
}

const initalState = {
    cart: getLocalStorage(),
    totalItems: 0,
    totalAmount: 0,
    shippingFee: 534
}


const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initalState)

    useEffect(() => {
        dispatch({ type: COUNT_CART_TOTALS })
        localStorage.setItem("cart", JSON.stringify(state.cart))
    }, [state.cart])

    const addToCart = (id, color, amount, product) => {
        dispatch({ type: ADD_TO_CART, payload: {id, color, amount, product} })
    }

    const removeItem = (id) => {
        dispatch({ type: REMOVE_CART_ITEM, payload: id })
    }

    const changeAmount = (id, type) => {
        dispatch({ type: CHANGE_ITEM_AMOUNT, payload: {id, type} })
    }

    const clearCart = () => {
        dispatch({ type: CLEAR_CART })
    }

    return (
        <CartContext.Provider value={
            {
                ...state,
                addToCart,
                removeItem,
                changeAmount,
                clearCart
            }
        }
        >
            {children}
        </CartContext.Provider>
    )
    
}


const useCartContext = () => {

    return useContext(CartContext)

}


export {
    CartProvider,
    useCartContext
}