import React from 'react'
import styled from 'styled-components'
import { FaTrash, FaChevronUp, FaChevronDown } from 'react-icons/fa'

import { formatPrice } from '../Utils/helpers'
import { useCartContext } from '../Context/CartContext'
import AmountButtons from './AmountButtons'


const CartItem = ({ id, name, image, color, price, amount }) => {

    const { removeItem, changeAmount } = useCartContext()

    const increase = () => {
        changeAmount(id, "increase")
    }

    const decrease = () => {
        changeAmount(id, "decrease")
    }

    return (
        <Wrapper>
            <div className="large-screen-view">
                <div className="item">
                    <img src={image} alt={name} />
                    <div className="item-info">
                        <h5 className="name">{name}</h5>
                        <p className="color">
                            Color: <span style={{background: color}}></span>
                        </p>
                    <h5 className="price">{formatPrice(price)}</h5>
                    </div>
                </div>
                <h5 className="price">{formatPrice(price)}</h5>
                <AmountButtons 
                    amount={amount}
                    increase={increase}
                    decrease={decrease}
                />
                <h5 className="price subtotal">{formatPrice(price * amount)}</h5>
                <button 
                    className="remove-icon"
                    onClick={() => removeItem(id)}
                >
                    <FaTrash />
                </button>
            </div>
            <div className="small-screen-view">
                <img src={image} alt={name} />
                <div className="item-info">
                    <h5 className="name">{name}</h5>
                    <p className="color">
                        Color: <span style={{background: color}}></span>
                    </p>
                    <h5 className="price">{formatPrice(price)}</h5>
                    <button 
                        className="remove-button"
                        onClick={() => removeItem(id)}
                    >
                        Remove
                    </button>
                </div>
                <div className="amount-buttons">
                    <button 
                        className="amount-button" 
                        onClick={() => changeAmount(id, "increase")}
                    >
                        <FaChevronUp />
                    </button>
                    <p className="item-amount">{amount}</p>
                    <button 
                        className="amount-button" 
                        onClick={() => changeAmount(id, "decrease")}
                    >
                        <FaChevronDown />
                    </button>
                </div>
            </div>
        </Wrapper>
    )

}


const Wrapper = styled.div `

    margin-bottom: 3rem;

    .large-screen-view {
        display: grid;
        grid-template-columns: 315px 1fr 1fr 1fr auto;
        align-items: center;
        justify-items: center;
        grid-gap: 1rem;
        .amount {
            font-size: 1.5rem;
            margin: 0;
            margin-bottom: 0.25rem;
        }
    }

    .item-info {
        .price {
            display: none;
            font-weight: bold;
        }
    }

    .item {
        display: grid;
        grid-template-columns: 100px 1fr;
        grid-gap: 1rem;
        align-items: center;
        justify-self: start;
    }

    img {
        height: 75px;
        border-radius: var(--border-radius);
    }

    .name {
        margin: 0;
    }

    .color {
        color: var(--gray-500);
        letter-spacing: var(--letter-spacing);
        text-transform: capitalize;
        margin-bottom: 0;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        span {
        display: inline-block;
        width: 0.7rem;
        height: 0.7rem;
        margin-left: 0.5rem;
        border-radius: var(--border-radius);
        }
    }

    .price {
        font-weight: normal;
        color: var(--primary-500);
        margin: 0;
    }

    .subtotal {
        color: var(--gray-500);
    }

    .remove-icon {
        color: var(--white);
        border: transparent;
        background: var(--dark-red);
        width: 1.5rem;
        height: 1.5rem;
        display: grid;
        place-items: center;
        border-radius: var(--border-radius);
        font-size: 0.75rem;
        transition: var(--transition);
        &:hover {
            background: var(--light-red);
        }
    }

    .small-screen-view {
        display: none;
        .price {
            color: var(--primary-700);
        }
        .amount-button {
            display: block;
            background: transparent;
            border: transparent;
            color: var(--primary-500);
            margin: 0.25rem auto;
            display: grid;
            place-items: center;
        }
    }

    .remove-button {
        background: transparent;
        border: transparent;
        color: var(--primary-500);
        letter-spacing: 3px;
        margin-top: 10px;
        text-transform: lowercase;
        font-size: 0.8rem;
    }

    .amount-buttons {
        justify-self: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1.25rem;
    }

    .item-amount {
        margin: 0;
        text-align: center;
    }

    @media all and (max-width: 775px) {
        .large-screen-view {
            grid-template-columns: 2fr 1fr auto;
        }
        .name {
            margin-bottom: 0.5rem;
        }
        .price {
            display: none;
        }
        .item-info {
            .price {
                display: block;
            }
        }
    }

    @media all and (max-width: 450px) {
        .large-screen-view {
            display: none;
        } 
        .small-screen-view {
            display: grid;
            grid-template-columns: 100px 1fr auto;
            grid-gap: 2rem;
            align-items: center;
            justify-content: center;
        }
    }

    @media all and (max-width: 300px) {
        .small-screen-view {
            grid-template-columns: 75px 1fr auto;
            grid-gap: 1rem;
        }
    }

`


export default CartItem
