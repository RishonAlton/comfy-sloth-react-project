import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa'

import AmountButtons from './AmountButtons'
import { useCartContext } from '../Context/CartContext'


const AddToCart = ({productInfo: product}) => {

    const { addToCart } = useCartContext()
    const { id, stock, colors = [] } = product

    const [main, setMain] = useState(colors[0])
    const [amount, setAmount] = useState(1)

    const increase = () => {
        setAmount(oldAmount => {
            let newAmount = oldAmount + 1
            if(newAmount > stock) {
                newAmount = stock
            }
            return newAmount
        })
    }

    const decrease = () => {
        setAmount(oldAmount => {
            let newAmount = oldAmount - 1
            if(newAmount < 1) {
                newAmount = 1
            }
            return newAmount
        })
    }

    return (
        <Wrapper>
            <div className="colors-section">
                <span>Colors:</span>
                <div className="colors">
                    {
                        colors.map((color, index) => {
                            return (
                                <button
                                    key={index}
                                    style={ {background: color} }
                                    className={main === color ? "color active" : "color"}
                                    onClick={() => setMain(color)}
                                >
                                    {main === color ? <FaCheck /> : null}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
            <AmountButtons 
                amount={amount}
                increase={increase}
                decrease={decrease}
            />
            <Link 
                to="/cart" 
                className="button"
                onClick={() => addToCart(id, main, amount, product)}
            >
                Add To Cart
            </Link>
        </Wrapper>
    )

}


const Wrapper = styled.div `

    margin-top: 2rem;

    .colors-section {
        display: grid;
        grid-template-columns: 125px 1fr;
        align-items: center;
        color: var(--gray-700);
        margin-bottom: 2rem;
        span {
            font-weight: bold;
        }
    }

    .colors {
        display: flex;
        gap: 0.5rem;
    }

    .color {
        display: inline-block;
        height: 1.5rem;
        width: 1.5rem;
        border: none;
        border-radius: 50%;
        color: white;
        display: grid;
        place-items: center;
        opacity: 0.5;
    }

    .active {
        opacity: 1;
    }

    .button {
        margin-top: 1rem;
    }

`


export default AddToCart
