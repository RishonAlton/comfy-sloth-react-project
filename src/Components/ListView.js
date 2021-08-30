import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { formatPrice } from '../Utils/helpers'


const description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore sit deleniti rerum quisquam, vel debitis ipsa minima autem optio ut veniam molestias aliquam necessitatibus placeat corporis libero nam repudiandae! Repudiandae nostrum harum at vitae quasi in ducimus distinctio vel ratione explicabo expedita, ipsam natus iusto praesentium, sint alias itaque mollitia."


const ListView = ({products}) => {

    return (
        <Wrapper>
            {
                products.map(product => {
                    const { id, image, name, price } = product
                    return (
                        <div className="product" key={id}>
                            <img src={image} alt={name} />
                            <div className="info">
                                <h4>{name}</h4>
                                <h5 className="price">{formatPrice(price)}</h5>
                                <p>{description.substring(0, 150)}...</p>
                                <Link to={`/products/${id}`} className="button">Details</Link>
                            </div>
                        </div>
                    )
                })
            }
        </Wrapper>
    )

}


const Wrapper = styled.div `

    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 3rem;

    .product {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem 2rem;
        align-items: center;
    }

    img {
        width: 275px;
        height: 200px;
        border-radius: var(--border-radius);
    }

    .price {
        color: var(--primary-500);
    }

    .button {
        font-size: 0.5rem;
        padding: 0.25rem 0.5rem;
    }

    @media all and (min-width: 900px) {
        grid-gap: 4rem;
        .product {
            grid-template-columns: 275px 1fr;
        }
    }

    @media all and (max-width: 300px) {
        img {
            width: 100%;
        }
    }

`


export default ListView
