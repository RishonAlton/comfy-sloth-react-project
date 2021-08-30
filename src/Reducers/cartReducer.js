import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    CLEAR_CART,
    CHANGE_ITEM_AMOUNT,
    COUNT_CART_TOTALS
} from "./actions"


const cartReducer = (state, action) => {

    if(action.type === ADD_TO_CART) {
        const { id, color, amount, product } = action.payload
        const cartItem = state.cart.find(item => item.id === id + color)
        if(cartItem) {
            const newCart = state.cart.map(item => {
                if(item.id === id + color) {
                    let newAmount = item.amount + amount
                    if(newAmount > item.stock) {
                        newAmount = item.stock
                    }
                    return {...item, amount: newAmount}
                }
                else {
                    return item
                }
            })
            return {...state, cart: newCart}
        }
        else {
            const newItem = {
                id: id + color,
                name: product.name,
                color,
                amount,
                image: product.images[0].url,
                price: product.price,
                stock: product.stock
            }
            return {...state, cart: [...state.cart, newItem]}
        }
    }

    if(action.type === REMOVE_CART_ITEM) {
        const newCart = state.cart.filter(item => item.id !== action.payload)
        return {...state, cart: newCart}
    }

    if(action.type === CLEAR_CART) {
        return {...state, cart: []}
    }

    if(action.type === CHANGE_ITEM_AMOUNT) {
        const { id, type } = action.payload
        const newCart = state.cart.map(item => {
            if(item.id === id) {
                if(type === "increase") {
                    let newAmount = item.amount + 1
                    if(newAmount > item.stock) {
                        newAmount = item.stock
                    }
                    return {...item, amount: newAmount}
                }
                if(type === "decrease") {
                    let newAmount = item.amount - 1
                    if(newAmount < 1) {
                        newAmount = 1
                    }
                    return {...item, amount: newAmount}
                }
            }
            return item
        })
        return {...state, cart: newCart}
    }

    if(action.type === COUNT_CART_TOTALS) {
        const { totalItems, totalAmount } = state.cart.reduce((total, item) => {
            const { amount, price } = item
            total.totalItems += amount
            total.totalAmount += price * amount
            return total
        }, {
            totalItems: 0,
            totalAmount: 0
        })
        return {...state, totalItems, totalAmount}
    }

    throw new Error(`No matching "${action.type}" action type`)

}


export default cartReducer