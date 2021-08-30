import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Header, CartContent } from '../Components'
import { useCartContext } from '../Context/CartContext'


const Cart = () => {

    const { cart } = useCartContext() 

    if(cart.length === 0) {
        return (
            <Wrapper className="page">
                <Header title="Cart" />
                <section className="section">
                    <h2>Your Cart is Empty</h2>
                    <Link to="/products" className="button">
                        Fill it
                    </Link>
                </section>
            </Wrapper>
        )
    }

    return (
        <main className="page">
            <Header title="Cart" />
            <CartContent />
        </main>
    )

}


const Wrapper = styled.main `

    text-align: center;

    h2 {
        text-transform: none;
    }

    .button {
        margin: 0 auto;
    }

`


export default Cart
