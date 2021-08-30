import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'
import { useCartContext } from '../Context/CartContext'


const CartContent = () => {

    const { cart, clearCart } = useCartContext()

    return (
        <Wrapper className="section">
            <CartColumns />
            <article>
                {
                    cart.map(item => <CartItem key={item.id} {...item} />)
                }
            </article>
            <hr />
            <article className="links">
                <Link to="/products" className="button link-button">
                    Continue Shopping
                </Link>
                <button className="button clear-button" onClick={clearCart}>
                    Clear Shopping Cart
                </button>
            </article>
            <CartTotals />
        </Wrapper>
    )

}


const Wrapper = styled.section ` 

    .links {
        margin: 2rem auto;
        display: flex;
        justify-content: space-between;
    }

    .link-button {
        text-transform: capitalize;
        font-size: 1rem;
        padding: 0.25rem 0.5rem;
        font-size: 0.9rem;
    }

    .clear-button {
        font-size: 0.8rem;
        background: var(--black);
    }

    .link-button:hover {
        background: var(--primary-500);
        color: var(--white);
    }

    .clear-button:hover {
        background: var(--black);
        color: var(--white);
    }

    @media all and (max-width: 450px) {
        .link-button {
            display: none;
        }
    }

`


export default CartContent
