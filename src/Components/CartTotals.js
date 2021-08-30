import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { useCartContext } from '../Context/CartContext'
import { formatPrice } from '../Utils/helpers'
import { useUserContext } from '../Context/UserContext'


const CartTotals = () => {

    const { totalAmount, shippingFee } = useCartContext()
    const { currentUser, loginWithRedirect } = useUserContext()

    return (
        <Wrapper>
            <div>
                <h5>
                    Subtotal: 
                    <span>
                        {formatPrice(totalAmount)}
                    </span>
                </h5>
                <p>
                    Shipping Fee:
                    <span>
                        {formatPrice(shippingFee)}
                    </span>
                </p>
                <hr />
                <h4>
                    Order Total:
                    <span>
                        {formatPrice(totalAmount + shippingFee)}
                    </span>
                </h4>
            </div>
            {
                currentUser ? (
                    <Link to="/checkout" className="button">
                        Proceed to Checkout
                    </Link>
                ) : (
                    <button className="button" onClick={loginWithRedirect}>
                        Login
                    </button>
                )
            }
        </Wrapper>
    )

}


const Wrapper = styled.article ` 

    max-width: 450px;
    margin: 3rem 0 3rem auto;

    div {
        padding: 1rem 2rem;
        border: 1px solid var(--gray-400);
        border-radius: var(--border-radius);
        width: 90%;
        margin: 0 auto;
    }

    h5, p, h4 {
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-gap: 1rem;
        align-items: end;
    }

    h4 {
        margin-top: 2rem;
        margin-bottom: 1rem;
    }

    .button {
        width: 90%;
        text-align: center;
        margin: 1rem auto;
    }

    @media all and (max-width: 775px) {
        margin: 3rem auto;
    }

    @media all and (max-width: 350px) {
        div {
            padding: 1rem;
        }
        h5 {
            font-size: 0.8rem;
        }
        h4 {
            font-size: 1rem;
        }
    }

`


export default CartTotals
