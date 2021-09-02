import React from 'react'
import styled from 'styled-components'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { useSidebarContext } from '../Context/SidebarContext'
import { useCartContext } from '../Context/CartContext'
import { useUserContext } from '../Context/UserContext'


const NavButtons = () => {

    const { closeSidebar } = useSidebarContext()
    const { totalItems, clearCart } = useCartContext()
    const { loginWithRedirect, logout, currentUser } = useUserContext()

    return (
        <Wrapper className="nav-buttons">
            <Link to="/cart" className="cart-button" onClick={closeSidebar}>
                <FaShoppingCart />
                <span className="cart-amount">
                    {totalItems}
                </span>
            </Link>
            {
                currentUser ? (
                    <button 
                        className="login-button"
                        onClick={() => {
                            logout({ returnTo: window.location.origin })
                            clearCart()
                            localStorage.removeItem("user")
                        }}
                    >
                        Logout
                    </button>
                ) : (
                    <button 
                        className="login-button"
                        onClick={loginWithRedirect}
                    >
                        Login
                    </button>
                )
            }
        </Wrapper>
    )

}


const Wrapper = styled.div `

    align-items: center;
    display: flex;
    /* gap: 3rem; */
    justify-content: center;

    .cart-button {
        position: relative;
        font-size: 1.5rem;
        color: var(--gray-700);
        display: grid;
        place-items: center;
        margin-right: 3rem;
    }

    .cart-amount {
        position: absolute;
        font-size: var(--small-text);
        background: var(--primary-500);
        color: white;
        display: grid;
        place-items: center;
        top: -0.75rem;
        right: -1rem;
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 50%;
    }

    .login-button {
        background: transparent;
        border: none;
        font-size: 1.5rem;
        color: var(--gray-700);
        letter-spacing: 1px;
    }

`


export default NavButtons
