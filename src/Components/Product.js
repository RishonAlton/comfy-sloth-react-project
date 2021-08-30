import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

import { formatPrice } from '../Utils/helpers'


const Product = ({ image, name, price, id }) => {

    return (
        <Wrapper>
            <div className="image-container">
                <img src={image} alt={name} />
                <Link to={`/products/${id}`} className="link">
                    <FaSearch />
                </Link>
            </div>
            <div className="product-info">
                <h5>{name}</h5>
                <p>{formatPrice(price)}</p>
            </div>
        </Wrapper>
    )

}


const Wrapper = styled.div `

    height: 100%;

    .image-container {
        height: 250px;
        position: relative;
        background: var(--black);
        border-radius: var(--border-radius);
        &:hover img {
            opacity: 0.5;
        }
        &:hover .link {
            opacity: 1;
            z-index: 2;
        }
    }
    
    img {
        height: 100%;
        border-radius: var(--border-radius);
        position: relative;
        transition: var(--transition);
    }

    .link {
        opacity: 0;
        z-index: -1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--primary-500);
        color: white;
        display: grid;
        place-items: center;
        font-size: 1.25rem;
        border-radius: 50%;
        height: 2.5rem;
        width: 2.5rem;
        transition: var(--transition);
        &:hover {
            background: var(--primary-700);
        }
    }

    .product-info {
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    h5 {
        font-weight: normal;
        font-size: 1rem;
        margin: 0;
        max-width: 175px;
    }

    p {
        color: var(--primary-500);
        letter-spacing: 1px;
    }

`


export default Product
