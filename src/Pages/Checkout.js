import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Header, StripeCheckout } from '../Components'
import { useCartContext } from '../Context/CartContext'


const Checkout = () => {

    const { cart } = useCartContext()

    return (
        <main className="page">
            <Header title="Checkout" />
            <Wrapper>
                {
                    cart.length === 0 ? (
                        <article className="section">
                            <h2>Your Cart is Empty</h2>
                            <Link to="/products" className="button">
                                Fill it
                            </Link>
                        </article>
                    ) : <StripeCheckout />
                }
            </Wrapper>
        </main>
    )

}


const Wrapper = styled.section `

    display: grid;
    place-items: center;
    min-height: calc(100vh - 20rem);

    h2 {
        text-transform: none;
        text-align: center;
    }

    .button {
        margin: 0 auto;
    }

`


export default Checkout
